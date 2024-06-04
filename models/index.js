const mongoose = require("mongoose");
const uri = "mongodb+srv://giridharanranganathan99:tuNCoCc2FBZj8idf@cluster0.5yeep8u.mongodb.net/test";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };