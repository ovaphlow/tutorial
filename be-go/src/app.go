package main

import (
    "database/sql"
    "encoding/json"
    "fmt"
    "net/http"
    "log"

    _ "github.com/go-sql-driver/mysql"
)

func MySQL() *sql.DB {
    db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/?charset=utf8")
    if err != nil {
        log.Println(err)
    }
    db.SetMaxOpenConns(5)
    db.SetMaxIdleConns(5)
    err = db.Ping()
    if err != nil {
        log.Println(err)
    }
    return db
}

func testRoute(w http.ResponseWriter, r *http.Request) {
    log.Println(r.Method, r.URL.Path)

    type response struct {
        Status int `json:"status"`
    }

    var res response
    res.Status = 200
    result, _ := json.Marshal(res)
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, string(result))
}

func rootRoute(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hola el mundo")
}

func main() {
    http.HandleFunc("/api/test", testRoute)
    http.HandleFunc("/", rootRoute)

    log.Println("服务启动于端口 9090")
    err := http.ListenAndServe(":9090", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
