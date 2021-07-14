const express = require('express')
const router = express.Router()

const DBHelper = require('../utils/DBHelper')
const sql = require('../sqlMap')

// 添加书籍
router.post('/addBook',(req, res)=>{
    let sqlStr = sql.book.add
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.book_name, params.book_author, params.book_press, params.book_place, params.book_ISBN, params.book_publication_time, params.book_picture], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 更新书籍信息
router.post('/updateBook',(req, res)=>{
    let sqlStr = sql.book.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.book_name, params.book_author, params.book_press, params.book_place, params.book_ISBN, params.book_publication_time, params.book_picture, params.book_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 删除书籍信息
router.post('/deleteBook',(req, res)=>{
    let sqlStr = sql.book.delete
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.book_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 查看所有书籍
router.post('/selectAllBook',(req, res)=>{
    let sqlStr = sql.book.selectAll
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

module.exports = router