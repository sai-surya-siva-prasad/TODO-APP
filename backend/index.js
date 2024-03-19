import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import { Book } from "./models/bookModel.js"; // Importing todoModel correctly

const app = express();
app.use(express.json());
app.use(cors());

app.get('/get', (req, res) => {
    Book.find()
      .then(result => { 
        console.log('surya'); // This will log "surya" to the console
        res.json(result);
      })
      .catch(error => { // Changed 'err' to 'error' for error handling
        res.json(error); // Send the error response as JSON
      });
  });
  
app.post('/add', (req, res) => {
  const task = req.body.task;
  Book.create({ task: task })
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  });
