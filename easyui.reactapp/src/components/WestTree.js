import React from 'react'
import { Tree } from 'rc-easyui'

// todo:
// 替换为SideMenu
class WestTree extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: 1,
          text: '主要功能',
          children: [
            {
              id: 101,
              text: '首页',
              href: '#'
            },
            {
              id: 102,
              text: "功能1",
              href: '#page1'
            }
          ]
        },
        {
          id: 2,
          text: '次要功能',
          state: 'closed',
          children: [
            {
              id: 201,
              text: '次要功能1'
            },
            {
              id: 202,
              text: '次要功能2'
            },
          ]
        },
        {
          id: 3,
          text: '基础数据',
          state: 'closed',
          children: [
            {
              id: 301,
              text: '基础数据1'
            },
            {
              id: 302,
              text: '基础数据2'
            },
            {
              id: 303,
              text: '基础数据3'
            }
          ]
        }
      ],
      selection: null      
    }
  }

  render() {
    return (
      <div>
        <Tree data={this.state.data} onSelectionChange={this.handleSelectionChange.bind(this)}></Tree>
      </div>
    )
  }

  handleSelectionChange(selection) {
    console.info(selection)
    this.setState({
      selection: selection
    })
    if (selection.href) {
      window.location = selection.href
    }
  }
}

export default WestTree