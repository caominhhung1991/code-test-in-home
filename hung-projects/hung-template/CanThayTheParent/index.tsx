import React, {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {useAppDispatch} from 'stores'
import {stopListen} from 'services/firebase'

const CanThayTheScreen: FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <>
      <Outlet/>
    </>
  )
}

export default CanThayTheScreen
