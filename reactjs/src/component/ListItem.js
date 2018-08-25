import React from 'react'

// 单独封装的一个组件，用来作为列表中的一个元素渲染。
export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="list-group-item">
        {/* 这里的this.props.item就是父组件传递过来的 */}
        id: {this.props.item.id}, name: {this.props.item.name}
      </li>
    )
  }
}