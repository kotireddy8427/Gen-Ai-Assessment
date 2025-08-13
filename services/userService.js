// User service: handles business logic and data storage
// In-memory user data for demonstration
const bcrypt = require("bcrypt");
const users = [
  {
    id: 1,
    username: "testuser",
    password: "$2b$10$wQwQwQwQwQwQwQwQwQwQwOeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQ", // hashed 'password123'
    email: "testuser@example.com",
  },
];
let nextId = 2;

module.exports = {
  // Fetch all users
  getAll: () => users,

  // Fetch user by ID
  getById: (id) => users.find((u) => u.id === id),

  // Create new user
  create: async ({ username, password, email }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: nextId++, username, password: hashedPassword, email };
    users.push(user);
    return user;
  },

  // Update user by ID
  update: async (id, { username, password, email }) => {
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    user.username = username;
    user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    return user;
  },

  // Delete user by ID
  delete: (id) => {
    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
  },
};
