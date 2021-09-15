# Winston

## 初始化

```javascript
// winston.js

const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.label({ label: "harold-dispatcher" }),
        winston.format.timestamp(),
        winston.format.printf(
          ({ level, message, label, timestamp }) =>
            `${timestamp} [${label}] ${level}: ${message}`
        )
      ),
    }),
    new winston.transports.File({
      level: "error",
      filename: "hengda-harold-dispatcher-error.log",
      format: winston.format.json(),
    }),
  ],
});
module.exports = logger;
```
