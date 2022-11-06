import axios from 'axios'
import { urlApi } from '../utils/urls.constantes'

const api = axios.create({
  baseURL: urlApi
})

export default api
