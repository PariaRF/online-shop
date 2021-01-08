const { default: token } = require("./token")

const checkAuth = (authenticateUser) =>{
    if(authenticateUser){
        return token;
    }
    return null;
}

export default checkAuth;