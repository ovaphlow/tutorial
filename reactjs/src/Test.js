import React from 'react'

export default class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">
          测试页面
          <hr />
          <a href="./#/">Home</a>
        </h3>
      </div>
    )
  }
}