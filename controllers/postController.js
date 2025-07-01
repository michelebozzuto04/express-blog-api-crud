const posts = require('../data/posts');

function index(req, res) {
    let filteredPosts = posts;

    if (req.query.tag) {
        const tag = req.query.tag;
        filteredPosts = posts.filter((post => post.tags.includes(tag)));
    }

    res.json(filteredPosts);
}

function show(req, res) {
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
}

function store(req, res) {
    res.send('New post created');
}

function update(req, res) {
    const id = req.params.id;
    res.send(`Full update of post with id ${id}`);
}

function modify(req, res) {
    const id = req.params.id;
    res.send(`Partial update of post with id ${id}`);
}

function destroy(req, res) {
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
}

module.exports = { index, show, store, update, modify, destroy };