const express = require ('express')
const controllers = require('../controllers/controller')

const routes = express.Router ();

routes.get("/cars", controllers.readCars)
routes.post("/cars/create", controllers.createCars)
routes.put("/cars/update/:reg", controllers.updateAcar)
routes.put("/cars/updatemany", controllers.updateMany);
routes.delete("/cars/delete/:reg", controllers.deleteOne)
routes.get("/cars/olderthan5", controllers.listOldCars);

module.exports = {
    routes

}

