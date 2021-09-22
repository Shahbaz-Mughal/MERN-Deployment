const PetsController = require("../controllers/pet.controller")
const Pets = require("../models/pet.model");

module.exports = app => {
    app.get("/api/pets/all", PetsController.findAllPets);
    app.post("/api/pets/create", PetsController.createPet);
    app.get('/api/pets/:_id', PetsController.findSinglePet);
    app.patch('/api/pets/:_id/update', PetsController.updateSinglePet);
    app.delete('/api/pets/:_id/delete', PetsController.deleteSinglePet);

    // app.put('/api/pets/:_id', PetsController.updateSinglePet);
}

// module.exports tells us other files how to import this file, or what happens when you import it
// when you import this, it imports as a function and it takes in app, important because app lets everything happen

// line 2  // doesn't need to be here, but w/e // 3:30 // https://www.youtube.com/watch?v=pODnsE16Fis&list=PLBZwc4aWOVuIT7bD_evBgCzBfEKolalfU&index=7