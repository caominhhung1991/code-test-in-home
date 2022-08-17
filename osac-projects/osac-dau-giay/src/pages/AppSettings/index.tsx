import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useAppDispatch} from 'stores'

import {stopListen} from 'services/firebase'
import * as noiPhucVuActions from 'pages/AppSettings/NoiPhucVu/noi-phuc-vu.store'
import * as khachHangActions from 'pages/AppSettings/KhachHang/khach-hang.store'
import * as diaDiemActions from 'pages/AppSettings/DiaDiem/dia-diem.store'
import * as caLamViecActions from 'pages/AppSettings/CaLamViec/ca-lam-viec.store'
import * as taiKhoanNganHangActions from 'pages/AppSettings/TaiKhoanNganHang/tai-khoan-ngan-hang.store'
import * as donViTinhActions from 'pages/AppSettings/DonViTinh/don-vi-tinh.store'

const AppSettingsScreen: FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(noiPhucVuActions.onGetsAsync())
    dispatch(khachHangActions.onGetsAsync())
    dispatch(diaDiemActions.onGetsAsync())
    dispatch(caLamViecActions.onGetsAsync())
    dispatch(taiKhoanNganHangActions.onGetsAsync())
    dispatch(donViTinhActions.onGetsAsync())

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

export default AppSettingsScreen
