module.exports = {

    addPost: (req, res) => {
        const db = req.app.get('db');
        const {id, post} = req.body;
         console.log(req.body)
        db.add_post({id, post})
        // .then(() => res.status(200).send(email))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }, 

    getAllPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_all_posts()
        .then(posts => res.status(200).send(posts))
        .catch(err => res.status(500).send(err))
    }

}