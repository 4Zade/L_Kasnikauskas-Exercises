import express from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Users retrieved successufully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/filter-by-course", (req, res, next) => {
  try {
    const { course } = req.query;
    if (!course) {
      return res.status(400).json({
        status: "error",
        message: "Course query prameter is required",
      });
    }

    const filteredUsers = users.filter((user) => user.program === course);

    res.status(200).json({
      status: "success",
      message: "Users filtered by course successufully",
      data: filteredUsers,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/paginated", (req, res, next) => {
  try {
    let { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedUsers = users.slice(startIndex, endIndex);

    const totalPages = Math.ceil(users.length / limit);

    res.status(200).json({
      status: "success",
      message: "Users retrieved successufully",
      data: paginatedUsers,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalUsers: users.length,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/search", (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({
        status: "error",
        message: "Name query prameter is required",
      });
    }

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );

    if (filteredUsers.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No users found with the given name",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Users retrieved successufully",
      data: filteredUsers,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/sorted-by-age", (req, res, next) => {
  try {
    const { sortOrder = "asc" } = req.query;

    const sortedUsers = users.sort((a, b) => {
      return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
    });

    res.status(200).json({
      status: "success",
      message: "Users sorted by age successufully",
      data: sortedUsers,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const getUser = users.find((user) => user.id === parseInt(req.params.id));
    if (!getUser) {
      return res.status(400).json({
        status: "error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Users retrieved successufully",
      data: getUser,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
      age: req.body.age,
      password: req.body.password,
      program: req.body.program,
    };

    users.push(newUser);

    await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.status(201).json({
      status: "success",
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateUser = users.find(
      (user) => user.id === parseInt(req.params.id),
    );

    const { name, password, age, program } = req.body;

    if (!name || !password || !age || !program) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required",
      });
    }

    Object.assign(updateUser, { name, password, age });

    await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: updateUser,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updateSpecificValueUser = users.find(
      (user) => user.id === parseInt(req.params.id),
    );

    const updates = req.body;

    for (const key in updates) {
      if (
        Object.prototype.hasOwnProperty.call(updates, key) &&
        Object.prototype.hasOwnProperty.call(updateSpecificValueUser, key)
      ) {
        updateSpecificValueUser[key] = updates[key];
      }
    }

    await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: updateSpecificValueUser,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = users.find(
      (user) => user.id === parseInt(req.params.id),
    );

    users.splice(deleteUser, 1);

    await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
