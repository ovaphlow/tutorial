```go
func MD5(s string) string  {
    sum := md5.Sum([]byte(s))
    return hex.EncodeToString(sum[:])
}
```