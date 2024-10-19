import express from "express";
import Router from "./router.js";
import connection from "./connection.js";
import path from 'path';

const app = express();
const port = 4000;

app.use(express.static('frontend'));  
app.use(express.json());
app.use('/api', Router);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('frontend/pages/index.html'));  
});

// Connect to the database and start the server
connection().then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
});