import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contacts'
import filtersReducer from './reducers/filters'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
