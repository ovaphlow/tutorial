import React from 'react'
import { Panel, TextBox, LinkButton} from 'rc-easyui'

class CenterPanel extends React.Component {
  header() {
    return (
      <div className="f-row">
        <div className="f-full" style={{ lineHeight: '30px' }}>
          Panel Title
        </div>

        <TextBox iconCls="icon-search"></TextBox>
      </div>
    )
  }

  footer() {
    return (
      <div style={{ padding: 5 }}>
        <LinkButton iconCls="icon-add">New</LinkButton>
        <LinkButton iconCls="icon-remove">Remove</LinkButton>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>#123321#</h2>
        <Panel
            title="Panel Title"
            style={{ height: '300px' }}
            bodyStyle={{ padding: 20 }}
            header={this.header}
            footer={this.footer}
        >
          <p>内容</p>
        </Panel>
      </div>
    )
  }
}

export default Panel