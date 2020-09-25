module.exports = {

    addPost: (req, res) => {
        const db = req.app.get('db');
        const {id, post, image} = req.body;
         console.log(req.body)
        db.add_post({id, post, image})
        // .then(() => res.status(200).send(email))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getAllPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_all_posts()
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    },

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
         console.log(req.params)
        db.delete_post(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }

}