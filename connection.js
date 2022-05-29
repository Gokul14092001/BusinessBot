const {Client} = require('pg')

const client = new Client({
    host: "ec2-54-211-255-161.compute-1.amazonaws.com",
    user: "yejeevsgjwqijt",
    port: 5432,
    password: "1f9ee013d3c452227401961c991db797115118a4ed31591470ca7e810baed7a2",
    database: "d34njugdi9ior6",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
