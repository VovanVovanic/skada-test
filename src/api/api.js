import axios from 'axios'

export const getPosts = (count, limit=4) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${count}&_limit=${limit}`)
    .then((res)=>res.data)
}
export const getData = (id) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}/comments?_start=2&_limit=2`)
    .then((res)=>res.data)
}
export const addData = (body) => {
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  }
  return axios
    .post(
      `https://jsonplaceholder.typicode.com/posts`,
      { ...body, userId: 1 },
      headers
    )
    .then((res) => res.data);
}