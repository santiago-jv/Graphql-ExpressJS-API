const server = require("./src/server");
require('dotenv').config()

function startServer () {
    const port = process.env.PORT || 8080
    try {
        server.listen(port, () => {
            console.log(`Running a server at http://localhost:${port}`) 
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
startServer()