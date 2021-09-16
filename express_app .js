const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hello Computing Class');
});
app.listen(PORT, () => {
    console.log(`Express App listening ay ${PORT}`);
});