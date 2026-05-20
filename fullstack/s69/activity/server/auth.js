// [Section] JSON Web Tokens
import jwt from "jsonwebtoken";

const secret = "gamesLibraryAPI"; // Refactored from "recipeAPI" to match the theme!

// 1. Create Access Token Function
const createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin
    };
    return jwt.sign(data, secret, {});      
};

// 2. Verification Middleware Function
const verify = (req, res, next) => {
    let token = req.headers.authorization;

    if (typeof token === "undefined") {
        return res.status(401).send({ auth: "Failed. No Token" }); // Added explicit HTTP Status Code
    } else {
        token = token.slice(7, token.length);

        jwt.verify(token, secret, function(err, decodedToken) {
            if (err) {
                return res.status(403).send({
                    auth: "Failed",
                    message: err.message
                });
            } else {
                req.user = decodedToken;
                next();
            }
        });
    }
};

// 3. Export both individual functions and a default object to satisfy all controllers
export { createAccessToken, verify };
export default {
    createAccessToken,
    verify
};