import { useState } from 'react';
const MoviesList = () => {
    let[moviesData,setData]=useState(
        [
          {
            Title:"KGF",
            Cast:"Yash",
            Director:"Prashanth Neel"
          },
          {
            Title:"James",
            Cast:"PuneethRajkumar",
            Director:"Chetan"
          },
          {
            Title:"RRR",
            Cast:"Ramcharan & NTR",
            Director:"Rajmouli"
          },
          {
            Title:"Beast",
            Cast:"Vijay",
            Director:"Nelson Dilipkumar"
          },
          {
            Title:"Pushpa",
            Cast:"AlluArjun",
            Director:"Sukumar"
          }
        ]
      )
    return (  
        <div className="data">
        {moviesData.map((value)=>{
          return(
            <div className="display">
              <h1>Title: {value.Title}</h1>
              <h3>Cast: {value.Cast}</h3>
              <h4>Director: {value.Director}</h4>
            </div>
          )
        }
        )}
        </div>
    );
}
 
export default MoviesList;