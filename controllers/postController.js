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

    if (!post) {

        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    res.json(post);
}

function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    }

    posts.push(newPost);

    console.log(posts);

    res.status(201);
    res.json(newPost);
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