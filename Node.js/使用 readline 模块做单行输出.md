#

```javascript
const readline = require('readline');

setInterval(()=>{
    //删除光标所在行
    readline.clearLine(process.stdout, 0);
    //移动光标到行首
    readline.cursorTo(process.stdout, 0,0)

    process.stdout.write(new Date().toLocaleString(),'utf-8');
},1000);
```
