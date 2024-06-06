const model = require('../models/carModel')
const carModel = model.carModel

//CRUD functionalisties in here

//Create. Add a car entry
const createCars = async (req, res) => {
    try {
        const { model, make, colour, reg, owner, address } = req.body;
        const car = await carModel.create({
            model: model,
            make: make,
            colour: colour,
            reg: reg,
            owner: owner,
            address: address
        });
        res.json({
            message: "Car saved",
            savedCar: car
        });
    } catch (error) {
        res.status(500).json({ message: "Error saving car", error });
    }
}

//Read. To find and display all the cars in the database
const readCars = async (req, res) => {
   try {
    const allCars = await carModel.find();
    res.json(allCars);
  } catch (error) {
    res.status(500).json({ message: "Error reading cars", error });
  }
};

//Update a single car entry
const updateAcar = async (req, res) => {
    
        const {reg} = req.params;
        const { model, make, colour, owner, address} = req.body;
try {
    const updatedCar = await carModel.findOneAndUpdate(
      { reg: reg },
      { model, make, colour, owner, address },
      { new: true, runValidators: true }
    );

    if (!updatedCar) {
        return res.status(404).json({ message: "Car not found" });
}
    res.json(updatedCar)
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the car", error });
    }
}

//Update a more than 1 car entry
const updateMany = async (req, res) => {
    
        const {reg} = req.params;
        const { model, make, colour, owner, address} = req.body;
try {
    const result = await carModel.updateMany(
      { reg: reg },
      { model, make, colour, owner, address },
      { new: true, runValidators: true }
    );

    if (result.nModified == 0) {
        return res.status(404).json({ message: "No cars were updated" });
}
    res.json({
        message: "Cars upated successfully",
        modifiedCount: result.nModified
    });

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the cars", error });
    }
}


//Delete a specific document
const deleteOne = async (req, res) => {
    const {reg} = req.params;
    try {
        const deletedCar = await carModel.findOneAndDelete({ reg: reg });

        if (!deletedCar) {
            return res.status(404).json ({message: "Car not found"});
        }
       
         res.json({ message: "Car deleted successfully", deletedCar });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting the car", error });
    }

}

//List cars older than 5 years
const listOldCars = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const cutoffYear = currentYear - 5;

    const oldCars = await carModel.find(
      { model: { $lt: cutoffYear } },
      "model make reg owner"
    );

    res.json(oldCars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching old cars", error });
  }
};



 module.exports = {
    //helloWorld,
    readCars,
    createCars,
    updateAcar,
    updateMany,
    deleteOne,
    listOldCars

}