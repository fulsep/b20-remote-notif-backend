const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sendNotif} = require('./src/helpers/firebase')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res)=> {
  return res.send({
    success: true,
    message: 'Backend running successfully'
  })
})

app.post('/transfer', (req, res)=> {
  const {amount, user} = req.body
  sendNotif('fikFNHlVQfKHlaDzbGG_gf:APA91bHffsrqfaU11aOYMj-48WHT8V3-4eX382EqN0pY3nrKKQvzVwbVmOWS96Ajpi_40PBYQWrst56bxnH61glrwLyaGSXuk3hYofHHGENt08ub-PuR70e7XadJFfpcWRdDUuZK54aK', 'Test', 'Halo', 'Promo')
  return res.send({
    success: true,
    message: 'Success transfer balance!'
  })
})

app.listen(8080, ()=>{
  console.log(`App listening on port 8080`)
})