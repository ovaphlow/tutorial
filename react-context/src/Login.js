import React from 'react'

class Login extends React.Component {
  constructor() {
    super()

    this.handleLogin = () => {
      let body = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
      let options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      }

      // 使用测试数据
      sessionStorage.setItem('auth', JSON.stringify({
        id: 1,
        username: 'user1',
        name: '用户876778'
      }))

      console.info(body)
      console.info(options)
      // fetch(`/api/user/login`, options)
      //   .then(response => response.json())
      //   .then(res => {
      //     //
      //   })
      //   .catch(err => window.console && console.error(err))
    }
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>用户登录</h4>

                  <hr/>

                  <div className="form-group">
                    <label>用户名</label>
                    <input type="text" className="form-control" id="username" />
                  </div>

                  <div className="form-group">
                    <label>密码</label>
                    <input type="password" className="form-control" id="password" />
                  </div>

                  <hr />

                  <button type="button" className="btn btn-primary btn-block" onClick={this.handleLogin}>
                    <i className="fa fa-fw fa-check"></i>
                    确定
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
