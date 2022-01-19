# 使用aria2下载

```powershell
youtube-dl.exe --proxy localhost:2802 --format 401+140 'https://www.youtube.com/watch?v=1Mp-2W9FabU' --external-downloader aria2c --external-downloader-args "--conf-path c:\\users\\ovaphlow\\aria2.conf --dir c:\\users\\ovaphlow --http-proxy http://localhost:2802 --async-dns=false"
```