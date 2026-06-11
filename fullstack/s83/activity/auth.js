const jwt = require("jsonwebtoken");

// Use a secret key from your .env file
const secret = process.env.JWT_SECRET_KEY;

// 1. Create Access Token
module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email
    };
    // Sign the token
    return jwt.sign(data, secret, { expiresIn: '1d' });
};

// 2. Verify Token (Middleware)
module.exports.verify = (req, res, next) => {
    let token = req.headers.authorization;

    if (typeof token === "undefined") {
        return res.send({ auth: "Failed. No Token" });
    } else {
        // Remove "Bearer " prefix if present
        token = token.slice(7, token.length);

        jwt.verify(token, secret, function(err, decodedToken) {
            if (err) {
                return res.status(403).send({ auth: "Failed", message: err.message });
            } else {
                req.user = decodedToken;
                next();
            }
        });
    }
};

// 3. Decode Token (Helper)
module.exports.decode = (token) => {
    if (typeof token !== "undefined") {
        token = token.slice(7, token.length);
        return jwt.decode(token, { complete: true }).payload;
    } else {
        return null;
    }
};