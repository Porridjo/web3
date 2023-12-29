const mongoose = require('mongoose')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('need 1 or 3 arguments')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://rayure:${password}@cluster0.71snwmt.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const name = process.argv[3]
const number = process.argv[4]

if (process.argv.length === 5) {
  const phoneEntry = new Phonebook({
    name,
    number
  })
  
  phoneEntry.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {
  console.log("phonebook:")
  Phonebook.find({}).then(result => {
    result.forEach(entry => {
      console.log(`${entry.name} ${entry.number}`)
    })
    mongoose.connection.close()
  })
}

