import axios from 'axios'

export const getMails = () => {
  return axios.get('../json/mails.json')
}

export const getFolders = () => {
  return axios.get('../json/folders.json')
}
