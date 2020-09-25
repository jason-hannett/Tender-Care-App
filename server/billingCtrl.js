module.exports = {

    addBill: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.params;
        const {amount, paid} = req.body;
        db.billing.add_bill(user_id, amount, paid)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getAllUserBills: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user
        db.billing.get_all_user_bills(user_id)
        .then(bills => res.status(200).send(bills))
        .catch(err => res.send(500).status(err))
    }
}