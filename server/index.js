import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

//==================================== API's ==============================================

import sheetsRouter from './routes/sheets.js';
import userRoutes from './routes/user.js';
import followingRoutes from './routes/following.js';

//=================================== Express ==============================================

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/sheets', sheetsRouter);
app.use('/user', userRoutes);
app.use('/following', followingRoutes);

//=================================== Swagger ==============================================
/*
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "Express API with Swagger",
        version: "0.1.0",
        description: "This is a simple CRUD API application made with Express and documented with Swagger",
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],*/
//    apis: ["./src/**/*.js"],
/*  };  

const specs = swaggerJSDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));*/

//================================== Datastore =============================================

const PORT = process.env.PORT || 5000;
const dataBaseURL = process.env.dataBaseURL || 'mongodb://root:example@mongo:27017/';

await mongoose.connect(dataBaseURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.get('/', (req, res)=> {
            res.send('This works!');
        })
        
        app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
        console.log('Connection established');
})
