const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const kanjiControllers = require("./controllers/itemControllers");
const hiraganaControllers = require("./controllers/hiraganaControllers");
const katakanaControllers = require("./controllers/katakanaControllers");
const usersControllers = require("./controllers/itemControllers");

router.get("/items", kanjiControllers.browse);
router.get("/items/:id", kanjiControllers.read);
router.put("/items/:id", kanjiControllers.edit);
router.post("/items", kanjiControllers.add);
router.delete("/items/:id", kanjiControllers.destroy);

router.get("/kanji", itemControllers.browse);
router.get("/kanji/:id", itemControllers.read);
router.put("/kanji/:id", itemControllers.edit);
router.post("/kanji", itemControllers.add);
router.delete("/kanji/:id", itemControllers.destroy);

router.get("/hiragana", hiraganaControllers.browse);
router.get("/hiragana/:id", hiraganaControllers.read);

router.get("/katakana", katakanaControllers.browse);
router.get("/katakana/:id", katakanaControllers.read);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
