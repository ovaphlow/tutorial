```
-Xmx64m -XX:MaxMetaspaceSize=64m -XX:CompressedClassSpaceSize=16m -Xss256k -XX:ReservedCodeCacheSize=16m -XX:MaxDirectMemorySize=16m -Xlog:gc
```

heap 堆 -Xmx

class 类 -XX:MaxMetaspaceSize -XX:CompressedClassSpaceSize

thread 线程 -Xss

code jit后代码 -XX:ReservedCodeCacheSize

[来源](https://www.zhihu.com/question/456438264)