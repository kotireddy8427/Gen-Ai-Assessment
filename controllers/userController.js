// User controller: handles request/response logic
const userService = require("../services/userService");
const { validateUser } = require("../middleware/validateUser");

// GET /users - fetch all users
exports.getAllUsers = (req, res) => {
  const users = userService.getAll();
  res.status(200).json({ success: true, users });
};

// GET /users/:id - fetch one user
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getById(id);
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  res.status(200).json({ success: true, user });
};

// POST /users - create user
exports.createUser = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const errors = validateUser({ username, password, email });
    if (errors.length) return res.status(400).json({ success: false, errors });
    const user = await userService.create({ username, password, email });
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

// PUT /users/:id - update user
exports.updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { username, password, email } = req.body;
    const errors = validateUser({ username, password, email }, true);
    if (errors.length) return res.status(400).json({ success: false, errors });
    const user = await userService.update(id, { username, password, email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

// DELETE /users/:id - delete user
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = userService.delete(id);
  if (!deleted)
    return res.status(404).json({ success: false, message: "User not found" });
  res.status(200).json({ success: true, message: "User deleted" });
};
