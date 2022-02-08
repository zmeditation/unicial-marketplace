import { createAsyncThunk } from '@reduxjs/toolkit'

const showBigbugAlert = createAsyncThunk('bigbug/show', async (msg: any) => {
  const payload = {
    bigbugAlertShow: msg,
  }
  return payload
})

export { showBigbugAlert }
