const express = require('express')
const router = express.Router()

const DBHelper = require('../utils/DBHelper')
const sql = require('../sqlMap')

// 添加药品信息
router.post('/addDrug',(req, res)=>{
    let sqlStr = sql.drug.add
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.drug_name, params.drug_picture, params.drug_type, params.drug_effect, params.drug_dose], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 更新药品信息
router.post('/updateDrug',(req, res)=>{
    let sqlStr = sql.drug.update
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.drug_name, params.drug_picture, params.drug_type, params.drug_effect, params.drug_dose, params.drug_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 删除药品
router.post('/deleteDrug',(req, res)=>{
    let sqlStr = sql.drug.delete
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.drug_id], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

// 查看所有药品
router.post('/selectAllDrug',(req, res)=>{
    let sqlStr = sql.drug.selectAll
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

// 查找某个类型的药品
router.post('/selectDrug',(req, res)=>{
    let sqlStr = sql.drug.selectType
    let params = req.body
    let conn = new DBHelper().getConn()
    conn.query(sqlStr, [params.drug_type], (err, result) => {
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
    conn.end()
})

module.exports = router