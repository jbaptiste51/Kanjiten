const express = require("express");

const router = express.Router();

const kanjiControllers = require("./controllers/kanjiControllers");
const hiraganaControllers = require("./controllers/hiraganaControllers");
const katakanaControllers = require("./controllers/katakanaControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/kanji", kanjiControllers.browse);
router.get("/kanji/:id", kanjiControllers.read);
router.put("/kanji/:id", kanjiControllers.edit);
router.post("/kanji", kanjiControllers.add);
router.delete("/kanji/:id", kanjiControllers.destroy);

router.get("/hiragana", hiraganaControllers.browse);
router.get("/hiragana/:id", hiraganaControllers.read);

router.get("/katakana", katakanaControllers.browse);
router.get("/katakana/:id", katakanaControllers.read);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
