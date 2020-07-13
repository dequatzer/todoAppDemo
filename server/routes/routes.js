const path = require("path");
const getConnection = require('../database/database');
const Queries = require('../database/queries');

module.exports = (app) => {

    app.get("/api/get-todo-list", (req, res) => {
        getConnection((error, connection) => {
            connection.query(Queries.fnGetTodoList(), (err, result) => {
                connection.release();
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            })
        })
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "./../public", "index.html"));
    })
}