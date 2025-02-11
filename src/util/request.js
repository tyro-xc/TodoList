import axios from 'axios'

const instance =axios.create();
const baseURL=""
instance.interceptors.request.use({
  baseURL,
})