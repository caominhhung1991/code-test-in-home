import React, {FC} from 'react'
import {TabPaneProps, Tabs, TabsProps} from 'antd'
import {css} from '@emotion/react'

const {TabPane} = Tabs

export interface MyTabsOption extends Omit<TabPaneProps, 'tab' | 'key'> {
  label: string;
  value: string | number;
  Icon?: any
}

export interface MyTabsProps extends TabsProps {
  options: MyTabsOption[];
}

const BaseTabs: FC<MyTabsProps> = props => {
  const {options, children, ...rest} = props

  const TabsElement = <Tabs {...rest} css={styles}>
    {
      options ? options.map((option) => {
        const {label, value, Icon} = option
        return <TabPane
          {...option}
          tab={<span>{Icon && <Icon/>} {label}</span>}
          key={value}
        />
      }) : children
    }
  </Tabs>

  return TabsElement
}

export const MyTabs = Object.assign(BaseTabs, Tabs)

export default MyTabs

const styles = css`
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 10px 10px -10px rgb(0 0 0 / 10%);
  height: 40px;
  .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-tab {
    padding: 9px 0;
    & + .ant-tabs-tab {
      margin: 0 0 0 22px;
    }
  }
`
