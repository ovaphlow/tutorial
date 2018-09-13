import React from 'react'

import ListItem from './component/ListItem'

export default class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = { list: [] }
  }

  componentDidMount() {
    this.setState({ list: [
      {
        'id': 1,
        'name': '11'
      },
      {
        'id': 2,
        'name': '22'
      },
      {
        'id': 3,
        'name': '33'
      }
    ]})
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">
          首页
          <hr />
          <a href="./#/test">Test</a>
        </h3>

        <ul className="list-group">
          {/* 循环一个数组来渲染多个组件 */}
          {/* 通过标签属性来传递数据，在子组件内会由React存放在组件自身的props内 */}
          {/* 被循环的标签要加上key属性，用于React使用 */}
          {this.state.list.map(item => 
            <ListItem key={item.id} item={item} />
          )}
        </ul>
      </div>
    )
  }
}