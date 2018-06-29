const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world!!');
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3]);
});

// to set environment var on the command line : export PORT=5000   <- any num
const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`Listening on port ${port}`));