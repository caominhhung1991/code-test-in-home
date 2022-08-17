import React, {FC} from 'react'
import {Divider, Tree, TreeProps} from 'antd'
import {DataNode} from 'rc-tree/lib/interface'
import {css} from '@emotion/react'

export interface MySideOption extends DataNode {
}

export interface MyAsideProps extends Omit<TreeProps, 'treeData'> {
  options?: MySideOption[]
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
}

export const MyAside: FC<MyAsideProps> = props => {
  const {options, header, body, footer, ...rest} = props

  return (
    <div css={styles}>
      {
        header && <div style={{paddingTop: '10px'}} className='header'>
          {header}
          <Divider />
        </div>
      }
      {
        body && <div style={{overflow: 'scroll'}}>{body}</div>
      }

      <Tree {...rest} treeData={options} blockNode />

      {
        footer && <div className='footer'>
          <Divider />
          {footer}
        </div>
      }
    </div>
  )
}

export default MyAside

const styles = css`
  padding: 0;
  background-color: #ffffff;
  margin-right: 8px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header,
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-divider-horizontal {
    margin: 5px 0;
  }

  .ant-tree {
    margin-top: 12px;
    flex: 1;

    .ant-tree-node-content-wrapper {
      line-height: 28px;
    }
  }
`
