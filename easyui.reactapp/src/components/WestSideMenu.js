import React from 'react'
import { SideMenu } from 'rc-easyui'

class WestSideMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      selection: null,
      menus: [
        {
          key: 1,
          text: '主要功能',
          iconCls: 'fa fa-wpforms',
          selected: true,
          state: 'open',
          children: [
            {
              key: 101,
              text: '首页'
            },
            {
              key: 102,
              text: '主要功能1'
            },
            {
              key: 103,
              text: '主要功能2'
            },
          ]
        },
        {
          key: 2,
          text: '次要功能',
          iconCls: 'fa fa-at',
          children: [
            {
              key: 201,
              text: '次要功能1'
            },
            {
              key: 202,
              text: '次要功能2'
            },
            {
              key: 203,
              text: '次要功能3'
            },
          ]
        },
        {
          key: 3,
          text: '基础数据',
          iconCls: 'fa fa-table',
          children: [
            {
              key: 301,
              text: '基础数据1'
            },
            {
              key: 302,
              text: '基础数据2'
            },
            {
              key: 303,
              text: '基础数据3'
            },
            {
              key: 304,
              text: '基础数据4'
            },
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h3>菜单</h3>
        <SideMenu style={{ width: '100%' }}
            data={this.state.menus}
            collapsed={false}
            onSelectionChange={(selection) => this.setState({ selection: selection })}
        />
      </div>
    )
  }
}

export default WestSideMenu