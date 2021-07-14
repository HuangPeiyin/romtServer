const express = require('express')
const router = express.Router()

const DBHelper = require('../utils/DBHelper')
const sql = require('../sqlMap')

// 用户注册， /addUser是定义的接口
router.post('/addUser', (req, res) => {
    let sqlStr = sql.user.add
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.u_name, params.u_password, params.u_sex, params.u_picture, params.u_birth, params.u_phone, params.u_email], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 用户修改信息
router.post('/updateUser',(req, res)=>{
    let sqlStr = sql.user.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.u_name, params.u_password, params.u_sex, params.u_picture, params.u_birth, params.u_phone, params.u_email,params.u_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 查找用户
router.post('/selectIDUser',(req, res)=>{
    let sqlStr = sql.user.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.u_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

module.exports = router