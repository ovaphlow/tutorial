# 使用aria2下载

```
youtube-dl.exe
    --proxy localhost:2802
    --format 401+140
    --external-downloader aria2c
    --external-downloader-args "--conf-path c:\\users\\ovaphlow\\aria2.conf --dir c:\\users\\ovaphlow\\desktop --http-proxy http://localhost:2802 --async-dns=false"
    'https://www.youtube.com/watch?v=1Mp-2W9FabU'
```