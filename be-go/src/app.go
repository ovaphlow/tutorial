package main

import (
    "fmt"
    "net/http"
    "log"
)

func rootRoute(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hola el mundo")
}

func main() {
    http.HandleFunc("/", rootRoute)

    log.Println("服务启动于端口 9090")
    err := http.ListenAndServe(":9090", nil)
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}
