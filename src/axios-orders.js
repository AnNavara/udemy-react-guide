import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-burger-54667.firebaseio.com/'
})

export default instance;