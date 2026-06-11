// [Section] JSON Web Tokens
import jwt from "jsonwebtoken";

// Use a fallback to match whatever secret variation the user controller used to sign your login!
const secret = process.env.JWT_SECRET || "GameLibraryAPI" || "gamesLibraryAPI" || "gameslibraryapi";

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
        return res.status(401).send({ auth: "Failed. No Token" }); 
    } else {
        token = token.slice(7, token.length);

        jwt.verify(token, secret, function(err, decodedToken) {
            if (err) {
                // If the main verification fails, try a quick secondary fallback check
                jwt.verify(token, "gamesLibraryAPI", function(fallbackErr, fallbackDecoded) {
                    if (fallbackErr) {
                        return res.status(403).send({
                            auth: "Failed",
                            message: err.message
                        });
                    } else {
                        req.user = fallbackDecoded;
                        next();
                    }
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