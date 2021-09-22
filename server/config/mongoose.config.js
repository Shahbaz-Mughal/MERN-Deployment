const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Established a connection to the database'))
    .catch(err=>console.log('Something went wrong when connection to the database, beep boop bop db connection was a flop', err))
