require('dotenv'). config()
const express = require('express')
const mongoose = require('mongoose')
const listingRouter = require('./routes/listing.routes')
const authRouter = require ('./routes/auth.routes')
const cors = require('cors')

const { isAuthenticated } = require ('./middleware/jwt.middleware')


const PORT = process.env.PORT;

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.json())


app.use('/api', isAuthenticated, listingRouter)
app.use('/auth', authRouter)



mongoose.connect(process.env.MONGODB_URI)
.then(x => {
    console.log(`Connected to Mongo! Database name:`, x.connections[0].name)
    app.listen(PORT, () => {
        console.log('Server started on port ' + PORT)
    });
})
.catch(err => console.error('Error starting server', err));