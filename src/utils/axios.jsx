import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});


export default instance;
// eyJhdWQiOiIyMjM2NjdkMTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1ViI6IjVxZmQyNWFjZWVINT
// g2MDA5MTFKOTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ. 
// uPjuX67gkt1PrFCrY6ZuR7Xm5bZESAcyqvSu8swmOLI",



// 66aa7f4da351f75ab31abe0ab77498ce