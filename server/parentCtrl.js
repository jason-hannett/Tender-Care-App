module.exports = {
    addPrimary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {first, last, phone, relation} = req.body;
        db.add_primary({user_id, first, last, phone, relation})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    addSecondary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {secondaryFirst, secondaryLast, secondaryPhone, secondaryRelation} = req.body;
        db.add_secondary({user_id, secondaryFirst, secondaryLast, secondaryPhone, secondaryRelation})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    addChild: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user;
        const {childFirst, childLast, childAge} = req.body;
        db.add_child({user_id, childFirst, childLast, childAge})
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

    getPrimary: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.params;
        // console.log(req.session.user.email)
        db.parent.get_primary(user_id)
        .then(primary => res.status(200).send(primary))
        .catch(err => res.status(500).send(err))
    }
}