# Flask

## 代码

```
// __init__.py
```

```python
// application.py

from flask import Flask, jsonify, request
from sqlalchemy import create_engine, text

app = Flask(__name__)

engine = create_engine(
        'mysql+pymysql://root:@127.0.0.1:3306/',
        connect_args={'charset': 'utf8'}, pool_recycle=60, pool_size=5)


@app.route('/api/user/login', methods=['POST'])
def login():
    print(request.method, request.path)
    print(request.json['account'], request.json['password'])
    return jsonify({
        'status': 200
    })


if __name__ == '__main__':
    app.run()


```

## 运行

```
gunicorn -w2 -b 0.0.0.0:8090 application:app
```
