const express = require('express')
const router = express.Router()

const DBHelper = require('../utils/DBHelper')
const sql = require('../sqlMap')

// 添加疾病信息
router.post('/addSick',(req, res)=>{
    let sqlStr = sql.sickness.add
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_name, params.sick_type, params.sick_symptom], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 更新疾病信息
router.post('/updateSick',(req, res)=>{
    let sqlStr = sql.sickness.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_name, params.sick_type, params.sick_symptom, params.sick_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 删除特定疾病
router.post('/deleteSick',(req, res)=>{
    let sqlStr = sql.sickness.delete
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 查看所有药品
router.post('/selectAllSick',(req, res)=>{
    let sqlStr = sql.sickness.selectAll
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

// 查找某个类型的疾病
router.post('/selectTypeSick',(req, res)=>{
    let sqlStr = sql.sickness.selectType
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_type], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

module.exports = router