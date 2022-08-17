import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TagItem, TagState} from '@caominhhung1991/components'

const initialState: TagState = {
  activeTagId: localStorage.getItem('activeTagId') || '',
  //@ts-ignore
  tags: localStorage.getItem('tags') ? JSON.parse(localStorage.getItem('tags')) : []
}

const tagsViewSlice = createSlice({
  name: 'tagsView',
  initialState,
  reducers: {
    setActiveTag(state, action: PayloadAction<string>) {
      state.activeTagId = action.payload
      localStorage.setItem('activeTagId', action.payload)
    },
    addTag(state, action: PayloadAction<TagItem>) {
      if (!state.tags.find(tag => tag.id === action.payload.id)) {
        state.tags.push(action.payload)
      }

      state.activeTagId = action.payload.id

      localStorage.setItem('activeTagId', action.payload.id)
      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
    removeTag(state, action: PayloadAction<string>) {
      const targetKey = action.payload
      if (targetKey === state.tags[0].id) {
        return
      }

      let activeTagId = state.activeTagId
      let lastIndex = 0

      state.tags.forEach((tag, i) => {
        if (tag.id === targetKey) {
          state.tags.splice(i, 1)
          lastIndex = i - 1
        }
      })
      const tagList = state.tags.filter(tag => tag.id !== targetKey)

      if (tagList.length && activeTagId === targetKey) {
        if (lastIndex >= 0) {
          state.activeTagId = tagList[lastIndex].id
          localStorage.setItem('activeTagId', state.activeTagId)
        } else {
          state.activeTagId = tagList[0].id
          localStorage.setItem('activeTagId', state.activeTagId)
        }
      }

      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
    removeAllTag(state) {
      state.activeTagId = state.tags[0].id
      state.tags = [state.tags[0]]

      localStorage.setItem('activeTagId', state.activeTagId)
      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
    removeOtherTag(state) {
      const activeTag = state.tags.find(tag => tag.id === state.activeTagId)
      const activeIsDashboard = activeTag!.id === state.tags[0].id

      state.tags = activeIsDashboard ? [state.tags[0]] : [state.tags[0], activeTag!]
      localStorage.setItem('tags', JSON.stringify(state.tags))
    },
  }
})

export const {setActiveTag, addTag, removeTag, removeAllTag, removeOtherTag} = tagsViewSlice.actions

export default tagsViewSlice.reducer
