const Pet = require("../models/pet.model")


module.exports.findAllPets = (req,res) => {
    console.log("hey it's me, you made it to Find All Pets!") // prints to console
    // res.json({message:"hey it's me!!!!"}) // webpage/local host
    Pet.find({})
        .then(allPets => res.json({results: allPets})) // promise
        .catch(err => res.json({message: "Pets.find all, did not work", err}))
    // Pet.find({}).sort({'type':1}) 
    //     .then(allPets => res.json({results: allPets})) // promise
    //     .catch(err => res.json({message: "Pets.find all, did not work", err}))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({results: newPet}))
        .catch(err => {
            console.log(err)
            if(err.code === 11000) {
                const errors = {
                    "name":{
                        "name":"ValidatorError",
                        "message":"a pet name should be unique",
                        "properties":{
                            "message":"a pet name should be unique",
                            "type":"unique",
                            "path":"name"
                        },
                        "kind":"unique",
                        "path":"name"
                    }
                }
                err.errors = errors;
                res.json({message: "This name is already taken, try another one", err})
            } else {
                res.json({message:"Pet.create one, did not work", err})
            }
        })

}

module.exports.findSinglePet = (req,res) => {
    Pet.findOne({_id: req.params._id})
        .then(singlePet => res.json({results: singlePet}))
        // .then(singlePet => res.json( singlePet))
        .catch(err => res.json({message: "Pet.find one, did not work", err}))
}

module.exports.updateSinglePet = (req,res) => {
    Pet.updateOne({_id: req.params._id}, req.body)
        .then(singlePet => res.json({results: singlePet}))
        .catch(err => res.json({message: "Pet.update one, did not work", err}))
}

module.exports.deleteSinglePet = (req,res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "Pet.delete one, did not work", err}))
}

