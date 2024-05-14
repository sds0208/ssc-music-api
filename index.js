const fs = require('fs');
const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());

const corsOptions = {
    origin: ['https://sscmusic.netlify.app/', 'https://sscmusic.net/'],
    optionsSuccessStatus: 200,
  };
 
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get('/', (request, response) => {

});

app.get('/music', (request, response) => {
    let json;
    try {
        json = fs.readFileSync('./music-samples.json', { encoding: 'utf8', flag: 'r' });
    } catch (err) {
        response.send(err);
        throw err;
    }
    
    response.send(json);
});