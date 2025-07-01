const express = require('express');
const app = express();
const PORT = process.env.PORT;
const PostRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("My server");
})

app.use('/posts', PostRouter);

app.listen(PORT, () => {
    console.log(`Server live on http://localhost:${PORT}`);
});