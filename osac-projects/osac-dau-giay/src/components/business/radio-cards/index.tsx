import React, {FC} from 'react'
import {Radio, RadioGroupProps} from 'antd'
import {css} from '@emotion/react'

export interface MyRadioCardssOption {
  label: React.ReactNode;
  value: string | number;
}

export interface MyRadioCardsProps extends RadioGroupProps {
  options: MyRadioCardssOption[];
}

export const MyRadioCards: FC<MyRadioCardsProps> = props => {
  const {options, ...rest} = props
  return (
    <div css={styles}>
      <Radio.Group buttonStyle="solid" {...rest}>
        {options?.map(option => (
          <Radio.Button style={{width: `calc(100% / ${options.length})`}} key={option.value} value={option.value}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  )
}

export default MyRadioCards

const styles = css`
  padding: 8px;
  background-color: #ffffff;
  .ant-radio-group {
    width: 100%;
    display: flex;
  }
  .ant-radio-button-wrapper {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .ant-radio-button {
  }
`
