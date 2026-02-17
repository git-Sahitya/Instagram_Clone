import User from "../models/user.model.js"

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(401).json({
                message: "Somethings is missing..!!",
                success: false,
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(401).json({
                message: "User already exists..!!",
                success: false,
            })
        };


    } catch (error) {
        console.log(error);

    }
}