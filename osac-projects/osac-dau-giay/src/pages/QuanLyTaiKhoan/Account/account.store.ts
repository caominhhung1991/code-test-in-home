import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {osacApp} from 'services/firebase/firebase-config'
import {message} from 'antd'
import {constantTabs, TabItem} from '@caominhhung1991/components'
import {Account as Instance, AccountState, IAccount} from './Account'
import {listenerDB, onValueDB, getData} from 'services/firebase'
import {getDatabase, ref} from 'firebase/database'
import {getFunctions, httpsCallable} from 'firebase/functions'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {formatSearch} from 'utils/formatSearch'
import {loginAsync} from 'stores/user.store'

const tabsData: TabItem[] = [
  constantTabs.all,
  {label: 'Thêm Account', value: 'add'},
  {label: 'Reset Password', value: 'resetPassword'}
]

const initialState: AccountState = {
  loading: false,
  selectedTab: tabsData[0].value,
  tabsData,
  accounts: {},
  accountId: '',
  phanQuyenData: {},

}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setDatas(state: AccountState, action) {
      state.accounts = action.payload
    },
    onPending(state: AccountState, action) {
      state.loading = !!action.payload
    },
    addSelectedId(state: AccountState, action) {
      state.accountId = action.payload
    },
    addAccountData(state: AccountState, action) {
      state.accountData = action.payload
    },
    addPhanQuyenData(state: AccountState, action) {
      state.phanQuyenData = action.payload
    }
  }
})

export const {addSelectedId, setDatas, onPending, addAccountData, addPhanQuyenData} = accountSlice.actions

export default accountSlice.reducer

export const onGetsAsync = () => (dispatch: Dispatch) => {
  dispatch(onPending(true))

  const db = getDatabase()

  const instance = new Instance()
  const pathDatas = instance.getPathDatas()

  const dbRef = ref(db, pathDatas)
  const unsubscribe = onValueDB(dbRef, (snapshot) => {
    const datas = snapshot.val() || {}

    dispatch(setDatas(datas))
  })

  listenerDB.push(['account', unsubscribe])

  dispatch(onPending(false))
}

export const onGetAccount = (user: any) => async (dispatch: Dispatch) => {
  const {uid} = user
  const pathDatas = (new Instance()).pathDatas
  const pathFinal = [...pathDatas, uid]
  const data = await getData(pathFinal)

  dispatch(addAccountData(data))
}

export const onCreateAccount = (payload: IAccount, onAfterFinish: any) => async (dispatch: Dispatch, getState: any) => {
  try {
    const {email, password} = payload

    const state = getState()
    const nhanSus = state.nhanSu.nhanSus
    const {hoTen} = nhanSus[payload.nhanSuId || ''] || {}

    const functions = getFunctions(osacApp)
    const createUser = httpsCallable(functions, 'createUser')
    return createUser({email, password, displayName: hoTen, photoURL: 'http://osac.vn/static/logo.gif'})
      .then(res => {
        console.log(res.data)
        onAfterFinish?.(res.data)
        return res.data
      })
      .catch(() => false)
  } catch (e) {
    console.log(e)
    return false
  }
}

export const onDeleteUser = (payload: any, onAfterFinish?: any) => async (dispatch: Dispatch) => {
  try {
    const functions = getFunctions(osacApp)
    const deleteUser = httpsCallable(functions, 'deleteUser')

    return deleteUser({uid: payload.id})
      .then(res => {
        console.log(res)
        onAfterFinish?.()
        return true
      })
      .catch((e) => {
        console.log(e)
        return false
      })
  } catch (e) {
    console.log(e)
    return false
  }
}

export const onDisableUser = (id: string, value: boolean) => async (dispatch: Dispatch) => {
  await dispatch<any>(onUpdateUser({id, disabled: !value}))
}

export const onUpdateUser = (payload: any, onAfterFinish?: any) => async (dispatch: Dispatch) => {
  try {
    const functions = getFunctions(osacApp)
    const updateUser = httpsCallable(functions, 'updateUser')

    return updateUser({uid: payload.id, updatedData: payload})
      .then((res) => {
        console.log(res)
        message.success('updated success!')
        onAfterFinish?.()
        return true
      })
      .catch(() => false)
  } catch (e) {
    console.log(e)
    message.success(JSON.stringify(e))
    return false
  }
}

export const onResetPassword = (email: string) => async (dispatch: Dispatch) => {
  const functions = getFunctions(osacApp)
  const resetPassword = httpsCallable(functions, 'resetPassword')

  return resetPassword({email})
    .then(res => {
      if (res?.data) {
        //@ts-ignore
        window.open((res?.data), '_blank');
      }
      return true
    })
    .catch(e => {
      console.log(e, 'e')
      return false
    })
}

export const onSignInWithEmailAndPassword = (payload: any) => async (dispatch: Dispatch) => {
  const {email, password, search, navigate, formatMessage} = payload
  dispatch(onPending(true))

  const auth = getAuth(osacApp)

  signInWithEmailAndPassword(auth, email, password)
    .then( (res) => {
      const navigateSearch = formatSearch(search)
      const from = navigateSearch.from || {pathname: '/'}

      dispatch<any>(loginAsync({user: res.user}))
      navigate(from)
    })
    .catch((error) => {
      const errorCode = error.code
      message.error(formatMessage({id: errorCode}))
    })
    .finally(() => {
      dispatch(onPending(false))
    })
}

export const getTenAccount = (data: any) => async (dispatch: any, getState: any) => {
  if (!data?.accountId) return data
  const accounts = getState().account.accounts

  let tenAccount = ''
  if (data?.accountId?.length && typeof data.accountId !== 'string') {
    tenAccount = data.accountId.map((id: any) => {
      const accountData = accounts?.[id] || {}

      return `${accountData.hoTen || ''} - ${accountData.email || ''}`
    }).join(', ')
  } else {
    const accountData = accounts?.[data.accountId] || {}
    tenAccount = `${accountData.hoTen || ''} - ${accountData.email || ''}`
  }

  return  {...data, tenAccount}
}
