import axios from "axios";
const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3/",

    headers: {
        Accept:"application/json",

        Authorization: 
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFhN2Y0ZGEzNTFmNzVhYjMxYWJlMGFiNzc0OThjZSIsIm5iZiI6MTcyNzkwMTU5Ny4xMzQ3MTcsInN1YiI6IjY2ZmRhOGNmNmZjNzRlNTc1NmY3YTg2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vibBTPo9LcWE4TRd_-KcY1BF1P_Jsh4X6W59BHJEQeQ"

    },
    

});

export default instance;
// eyJhdWQiOiIyMjM2NjdkMTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1ViI6IjVxZmQyNWFjZWVINT
// g2MDA5MTFKOTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ. 
// uPjuX67gkt1PrFCrY6ZuR7Xm5bZESAcyqvSu8swmOLI",



// 66aa7f4da351f75ab31abe0ab77498ce