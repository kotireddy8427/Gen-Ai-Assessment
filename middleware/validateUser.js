// Middleware: validates user input for POST/PUT
function validateUser({ username, password, email }, isUpdate = false) {
  const errors = [];
  if (!isUpdate || username !== undefined) {
    if (!username || typeof username !== "string" || username.length < 3) {
      errors.push("Username is required and must be at least 3 characters.");
    }
  }
  if (!isUpdate || password !== undefined) {
    if (!password || typeof password !== "string" || password.length < 6) {
      errors.push("Password is required and must be at least 6 characters.");
    }
  }
  if (!isUpdate || email !== undefined) {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push("Valid email is required.");
    }
  }
  return errors;
}

module.exports = { validateUser };
