const express = require('express');

const app = express();
const port = 5000;

app.use(express.static('public'));



function checker(){
    const coinFlip = Math.round(Math.random()) + 1;
    if (coinFlip == 1) {
        return "heads";
    } else {
        return "tails";
    }
}

app.get("/flipcoin", (req, res) => {
     res.send(checker())
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});