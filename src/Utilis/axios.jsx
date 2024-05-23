import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDg3OWYwOWI2MTM1MjBmNTU1NTI0NWJiNDBiYWU3NCIsInN1YiI6IjY2MWNjZjhiNmQxYmIyMDE3YzM4OWU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DRVrLmPbYrrAu5rpLw8VO13kNx1_qx6JyqdqTK7iHTA'
      }
})


export default instance;