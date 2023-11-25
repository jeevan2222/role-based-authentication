const users = [
  { id: 1, roles: ["user"] },
  { id: 2, roles: ["admin", "user"] },
  { id: 3, roles: ["moderator", "user"] },
  { id: 4, roles: ["user"] },
  { id: 5, roles: ["admin", "user"] },
];

// auth.js

module.exports = function auth(req, res, next) {
  console.log("Authentication middleware executed");

  const { id, role } = req.body;

  // Check if there is a user with the specified id and if the roles array includes the specified role
  const userAuthorized = users.some(
    (ele) => ele.id === id && ele.roles.includes(role)
  );

  if (userAuthorized) {
    next(); // Call next to pass control to the next middleware or route handler
  } else {
    res.status(401).send({
      status: 401,
      message: "User Not Authorized",
    });
  }
};
