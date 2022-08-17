import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {getStorage, ref as sRef, uploadBytes} from 'firebase/storage'
import {NImage} from './image'
import {resizeFile} from '@caominhhung1991/components'

const initialState: NImage.ImageState = {
  loading: false
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    onPending(state: NImage.ImageState, action) {
      state.loading = action.payload
    }
  }
})

export const {onPending} = imageSlice.actions

export default imageSlice.reducer

export const addImage = (payload: NImage.PayloadProps) => async (dispatch: Dispatch) => {
  const {file, path} = payload
  dispatch(onPending(true))

  if (file?.uid && path) {
    const storage = getStorage()
    const refString = [...path].join('/')
    const ref = sRef(storage, refString)
    const resizedFile = await resizeFile(file)

    // @ts-ignore
    await uploadBytes(ref, resizedFile)

    return true
  }

  dispatch(onPending(false))

  return false
}
