package main

import (
    "database/sql"
    // "encoding/json"
    "fmt"
    "log"
    "reflect"
    "runtime"
    // "strconv"

    _ "github.com/go-sql-driver/mysql"
)

var MySQL *sql.DB

func init() {
    MySQL, _ = sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/haxi?charset=utf8")
    MySQL.SetMaxOpenConns(runtime.NumCPU())

    err := MySQL.Ping()
    if err != nil { log.Println("数据库通信异常") }
}

func main() {
    statement, err := MySQL.Prepare(`
        select * from common_data
    `)
    if err != nil { log.Println(err) }
    rows, err := statement.Query()
    if err != nil { log.Println(err) }
    columns, err := rows.Columns()
    scanArgs := make([]interface{}, len(columns))
    values := make([]interface{}, len(columns))
    for i := range values {
        scanArgs[i] = &values[i]
    }

    record := make(map[string]interface{})
    var result []map[string]interface{}
    log.Println(result)
    for rows.Next() {
        err = rows.Scan(scanArgs...)
        if err != nil { log.Println(err) }
        for i, v := range values {
            if "int64" == fmt.Sprintf("%s", reflect.TypeOf(v)) {
                record[columns[i]] = v
            } else if fmt.Sprintf("%s", reflect.TypeOf(v)) == "[]uint8" {
                if v != nil {
                    record[columns[i]] = fmt.Sprintf("%s", v)
                } else {
                    record[columns[i]] = ""
                }
            } else { log.Println(reflect.TypeOf(v)) }
        }
        // log.Println(record)
        result = append(result, record)
    }
    log.Println(result)
    log.Println(result[3]["value"])

    // type User struct {
    //     ID int `json"id"`
    //     Account string `json:"account"`
    //     Password string `json:"password"`
    // }
    // user := User{1, "account", "pwd1"}
    // t := reflect.TypeOf(user)
    // v := reflect.ValueOf(user)
    // log.Println(t, v)
    // var data = make(map[string]interface{})
    // for i := 0; i < t.NumField(); i++ {
    //     data[t.Field(i).Name] = v.Field(i).Interface()
    // }
    // log.Println(data)
    // log.Println(data["Account"], data["ID"])
    // json_str := `
    //     {
    //         "name": "eqweqwedasdf",
    //         "age": 12
    //     }
    // `
    // var mapResult map[string]interface{}
    // if err := json.Unmarshal([]byte(json_str), &mapResult); err != nil {
    //     log.Println(err)
    // }
    // log.Println(mapResult)
    // log.Println(mapResult["name"])
}
