const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("My server")
})

app.listen(PORT, () => {
    console.log(`Server live on http://localhost:${PORT}`);
});