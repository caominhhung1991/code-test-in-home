import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useAppDispatch} from 'stores'
import {stopListen} from 'services/firebase'
import {onGetsAsync as onGetsNoiPhucVu} from 'pages/AppSettings/NoiPhucVu/noi-phuc-vu.store'
import {onGetsAsync as onGetsKhachHang} from 'pages/AppSettings/KhachHang/khach-hang.store'

const QuanLyQuayNuocScreen: FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(onGetsKhachHang())
    dispatch(onGetsNoiPhucVu())

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

export default QuanLyQuayNuocScreen
