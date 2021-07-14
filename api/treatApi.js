const express = require('express')
const router = express.Router()

const DBHelper = require('../utils/DBHelper')
const sql = require('../sqlMap')

// 添加药品的治疗等级
router.post('/addTreat',(req, res)=>{
    let sqlStr = sql.treat.add
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_id, params.drug_id, params.treat_level], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 更新治疗信息
router.post('/updateTreat',(req, res)=>{
    let sqlStr = sql.treat.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.sick_id, params.drug_id, params.treat_level, params.treat_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 删除治疗信息
router.post('/deleteTreat',(req, res)=>{
    let sqlStr = sql.treat.delete
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.treat_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 查看所有治疗信息
router.post('/selectAllTreat',(req, res)=>{
    let sqlStr = sql.treat.selectAll
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