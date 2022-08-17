import {createSlice} from '@reduxjs/toolkit'

const initialState: any = JSON.parse(localStorage.getItem('tagsPage') || '{}' as any)

const tagsPageSlice = createSlice({
  name: 'tagsPage',
  initialState,
  reducers: {
    toggleAside(state, action) {
      const {tagPageId} = action.payload
      const tagPageValue = state?.[tagPageId]

      const newTagsPage = {...state, [tagPageId]: !tagPageValue}

      localStorage.setItem('tagsPage', JSON.stringify(newTagsPage))

      state[tagPageId] = !tagPageValue
    }
  }
})

export const {toggleAside} = tagsPageSlice.actions

export default tagsPageSlice.reducer
