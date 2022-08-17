import React, {FC} from 'react'
import {Space, Tag} from 'antd'
import {getBusinessUserList} from 'api/business'
import {MyButton} from '@caominhhung1991/components'
import MyPage, {MyPageTableOptions} from 'components/business/page'
import {BuniesssUser} from '@caominhhung1991/components'

const {Item: SearchItem} = MyPage.MySearch

const tableColums: MyPageTableOptions<BuniesssUser> = [
  {
    title: 'Name',
    className: 'text-small',
    children: [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        className: 'text-small',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        className: 'text-small',
      }
    ]
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    className: 'text-small',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    className: 'text-small',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    className: 'text-small',
    render: (tags, record) => (
      <>
        {record.tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    className: 'text-small',
    render: (_, record) => (
      <Space size="middle">
        <MyButton type="text">Invite {record.lastName}</MyButton>
        <MyButton type="text">Delete</MyButton>
      </Space>
    )
  }
]

const BusinessWithSearchPage: FC = () => {
  return (
    <MyPage
      pageApi={getBusinessUserList}
      searchRender={
        <>
          <SearchItem label="FirstName" name="firstName" type="input"/>
        </>
      }
      tableOptions={tableColums}
    />
  )
}

export default BusinessWithSearchPage
