import {css} from '@emotion/react'

export const pageStyles = css`
  display: flex;
  flex-direction: column;
  .tabs-main {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .search {
    margin-bottom: 10px;
  }

  .aside-main {
    display: flex;
    flex: 1;
    overflow: hidden;
    flex-direction: column;
  }

  .table {
    flex: 1;
    overflow: hidden;
    
    .ant-table-wrapper, .ant-spin-nested-loading, .ant-spin-container, .ant-table-container {
      height: 100%;
    }
    
    .ant-spin-container {
       overflow: hidden;
       display: flex;
       flex-direction: column;
    
       .ant-table {
         flex: 1;
         overflow: hidden;
         border-bottom: 1px solid #eee;
    
         .ant-table-container {
           display: flex;
           flex-direction: column;
           .ant-table-body {
             flex: 1;
           }
         }
       }
    
       .ant-pagination {
          margin: 7px 0 5px 0;
         padding: 0 10px;
       }
     }
  }
`
