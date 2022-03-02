const express = require('express');
const router = express.Router();
// const authrModels = require("../models/authorModel")
// const publisherModels = require("../models/publisher")
// const bookModels = require("../models/bookModel")
const BookController= require("../controllers/bookController")

router.post("/author", BookController.createAuthor)
router.post("/publisher", BookController.createpublisher)
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBook)

module.exports = router;
// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;