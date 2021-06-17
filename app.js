const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ['http://localhost:8080']
}));

app.listen(3000, () => {
    console.log('Server started at port 3000');
})


app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});
