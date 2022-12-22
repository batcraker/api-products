import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })

  const rolesFound = await Role.find({name: {$in: roles}})
  newUser.role = rolesFound.map((role) => role._id)

  const savedUser = await newUser.save();
  return res.status(201).json({
    user:{
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        roles: savedUser.role
    }
  })

};

export const getUsers = async (req, res) => {
    const users = await User.find();
    return res.json({
        users
    })
}

export const getUser = async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.json({
        user
    })
}
