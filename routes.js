const {login} = require("./controllers/authorization");
const {form} = require("./controllers/students");


const routes = (app) => {
    app.post("/authorization/login", login)
    app.post("/students/form", form)
}
module.exports = routes;    