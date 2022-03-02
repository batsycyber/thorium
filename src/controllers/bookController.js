const { count } = require("console")
const AuthorModel= require("../models/authorModel")
const PublisherModel= require("../models/publisher")
const BookModel= require("../models/bookModel")

const createAuthor = async function (req, res) {
    let Adata= req.body
    let savedAuthor= await AuthorModel.create(Adata)
    res.send({msg: savedAuthor})
}
const createpublisher = async function (req, res) {
    let Pdata= req.body
    let savedPublisher= await PublisherModel.create(Pdata)
    res.send({msg: savedPublisher})
}

const createBook= async function (req, res) {
    let bookDetail = req.body
    let authorId = bookDetail.author
    let publisherId = bookDetail.publisher


    if(!authorId) return res.send('The request is not valid as the author details are required.')


    let author = await AuthorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')


    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    let publisher = await PublisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await BookModel.create(bookDetail)
    return res.send({data: bookCreated})
}

    // let savedBook= await BookModel.create(data)
    // res.send({msg: savedBook})}

    
const getBook= async function (req, res) {
let savedBook= await BookModel.find().populate('author publisher')
res.send({msg: savedBook})}

module.exports.createBook= createBook
module.exports.getBook = getBook
module.exports.createAuthor= createAuthor
module.exports.createpublisher = createpublisher

// const { count } = require("console")
// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
