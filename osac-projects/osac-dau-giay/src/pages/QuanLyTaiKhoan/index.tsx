import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useAppDispatch} from 'stores'
import {stopListen} from 'services/firebase'
import {onGetsAsync as onNhanSuGetsAsync} from 'pages/QuanLyNhanSu/NhanSu/nhan-su.store'
import {onGetsAsync as onAccountGetsAsync} from './Account/account.store'

const QuanLyTaiKhoanScreen: FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(onNhanSuGetsAsync())
    dispatch(onAccountGetsAsync())

    return () => {
      stopListen()
    }
  }, [])
  return (
    <>
      <Outlet/>
    </>
  )
}

export default QuanLyTaiKhoanScreen
