import * as userService from "../services/userServices.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: err.message }); // test
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log("userData:", userData);
    const user = await userService.createUser(userData);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user ID from the URL
    const userData = req.body;
    const user = await userService.updateUser(userData, userId);
    // This check is useful to check if the user exists in the database if not exist it means the id is wrong
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.deleteUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).send();
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: err.message });
  }
};

export const searchUsers = async (req, res) => {
  try {
    const searchTerm = req.query.q; // Get the search term from the query parameters
    const users = await userService.searchUsers(searchTerm);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error searching clients:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * data : data are in req.body
 * id: id is in req.params.id
 * query: query is in req.query.q
 */
