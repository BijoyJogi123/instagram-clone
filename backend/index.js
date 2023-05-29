//packages
const connectDB = require('./db/connect');
const bodyParser = require("body-parser");
const express = require('express');
// require('dotenv').config();
const helmet =  require('helmet');
const app = express();
const morgan = require('morgan');
const cors  = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
//Async error



//middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));


app.use(cors());


app.use('/api/auth',require('./routes/auth'));
app.use('/api/users',require('./routes/user'))
app.use("/api/posts",require('./routes/post'));

// monogoogdb servers 

const port = process.env.PORT || 3000;

const start =  async() =>{

        try {
            await connectDB(process.env.MONGO_URI);
            app.listen(port,console.log(`instgram-clone running on port ${port}...`))
        } catch (error) {
                console.log(error);
        }

}
start();