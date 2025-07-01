const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const posts = require('../data/posts');

// index
router.get('/', (req, res) => {
    res.json(posts);
})

// show
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);
    // Facciamo il controllo
    if (!post) {
        //Imposto lo status 404
        res.status(404)
        // Restituisco un JSON con le altre informazioni
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // Restituiamolo sotto forma di JSON
    res.json(post);
})

// post
router.post('/', (req, res) => {
    res.send('New post created');
})

// put
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Full update of post with id ${id}`);
})

// patch
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Partial update of post with id ${id}`);
})

// delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);
    console.log(posts);
})

module.exports = router;