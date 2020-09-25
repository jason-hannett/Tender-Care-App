module.exports = {
    addPrimary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {first, last, phone, relation} = req.body;
        db.parent.add_primary({user_id, first, last, phone, relation})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    addSecondary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {secondaryFirst, secondaryLast, secondaryPhone, secondaryRelation} = req.body;
        db.parent.add_secondary({user_id, secondaryFirst, secondaryLast, secondaryPhone, secondaryRelation})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    addChild: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {childFirst, childLast, childAge} = req.body;
        db.parent.add_child({user_id, childFirst, childLast, childAge})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getAllParent: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.parent.get_all_parent_info(user_id)
        .then(primary => res.status(200).send(primary))
        .catch(err => res.status(500).send(err))
    },

    getAllChild: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        db.parent.get_all_child_info(user_id)
        .then(child => res.status(200).send(child))
        .catch(err => res.status(500).send(err))
    },

    getPrimary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.params;
        // console.log(req.session.user.email)
        db.parent.get_primary(user_id)
        .then(primary => res.status(200).send(primary))
        .catch(err => res.status(500).send(err))
    },

    deleteChild: (req, res) => {
        const db = req.app.get('db');
        const {child_id} = req.params;
        db.parent.delete_child(child_id)
        .then(response => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}