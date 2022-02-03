import {ApiUrl} from '../config/constant'

export const getParcelsByOwner = async (owner: any) => {
  try {
    const response = await axios.get(`${ApiUrl}/email/forgot_password/confirm/${owner}`)
    return response.data
  } catch (error: any) {
    return console.log(error)
  }
}

export const getEstatesByOwner = async (owner: any) => {
  try {
    const response = await axios.get(`${ApiUrl}/email/forgot_password/confirm/${owner}`)
    return response.data
  } catch (error: any) {
    return console.log(error)
  }
}