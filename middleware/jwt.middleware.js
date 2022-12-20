const { expressjwt: jwt } = require("express-jwt");

const isAuthenticated = jwt ({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: 'payload',
    getToken: getTokenfromHeaders 
})


function getTokenfromHeaders (req) {
    console.log("These are the Auth Headers:", req.headers.authorization)
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        const token = req.headers.authorization.split(" ")[1];
      return token
      } 
      
      return null
}

module.exports = { isAuthenticated }