// 数据库连接
const mysql = require('mysql')

class DBHelper{
    // 获取数据库连接
    getConn(){
        let conn = mysql.createConnection({
            // 数据库连接配置
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: '数据库密码',
            database: 'romt'
        })
        conn.connect()
        return conn
    }
}
module.exports = DBHelper
