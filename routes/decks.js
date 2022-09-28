const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const deckController = require("../controllers/deck");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", ensureAuth, deckController.getMyDeck);

router.get("/:id", ensureAuth, deckController.getDeck);

// router.get("/explore", deckController.getExplore);

// router.post("/createDeck", upload.single("file"), deckController.createDeck);
router.post("/createDeck", deckController.createDeck);

router.put("/likeDeck/:id", deckController.likeDeck);

router.delete("/deleteDeck/:id", deckController.deleteDeck);

module.exports = router;
