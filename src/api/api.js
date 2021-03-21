import axios from 'axios'

export const getPosts = (count) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${count}&_limit=10`)
    .then((res)=>res.data)
}