import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {Locale, UserState} from '@caominhhung1991/components'
import {getGlobalState} from 'utils/getGlobal'
import {getAuth, signOut} from 'firebase/auth'
import {osacApp} from 'services/firebase/firebase-config'

const initialState: UserState = {
  ...getGlobalState(),
  noticeCount: 0,
  locale: (localStorage.getItem('locale')! || 'vi_VN') as Locale,
  newUser: false,
  // newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true,
  logged: false,
  menuList: [],
  routesList: [],
  email: localStorage.getItem('email') || '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserItem(state: UserState, action: PayloadAction<Partial<UserState>>) {
      Object.assign(state, action.payload)
    }
  }
})

export const {setUserItem} = userSlice.actions

export default userSlice.reducer

export const loginAsync = (payload: any) => (dispatch: Dispatch) => {
  const {user} = payload
  dispatch(setUserItem({logged: true, email: user.email}))

  return true
}

export const logoutAsync = () => async (dispatch: Dispatch) => {
  localStorage.clear()

  await signOut(getAuth(osacApp))

  dispatch(setUserItem({logged: false, email: ''}))

  return true
}
