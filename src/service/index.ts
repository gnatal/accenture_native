import axios from 'axios'

export const sendContact = axios.create({
  baseURL: 'https://webhook.site/81b27197-1d6e-4da5-a986-a0539c9776ba',
})
