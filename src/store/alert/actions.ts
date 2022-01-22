import { createAsyncThunk } from '@reduxjs/toolkit'

const showAlert = createAsyncThunk('alert/show', async (msg: any, severity: any) => {
  const payload = {
    message: msg,
    severity: severity,
  }
  return payload
})

export { showAlert }
