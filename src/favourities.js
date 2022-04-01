import SeriesList from './SeriesList';
import { useState,useEffect } from 'react';

const Favourites = () => {
    let[seriesData,setData] = useState([])
    useEffect(()=>{
      fetch("  http://localhost:7000/series")
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setData(data)
      })
    },[])
    let clickImage=(id)=>{
        let newData = seriesData.filter((value)=>value.id !=id)
        setData(newData)
        }
        useEffect(()=>{
            console.log('it worked');
          },[seriesData])
    return ( 
        <div className="favourites">
             <SeriesList data={seriesData}  pageTitle="Popular series" delete={clickImage}  />
          <SeriesList data={seriesData.filter((value)=>value.language =="english")}  pageTitle="Popular series" />
        </div>
     );
}
 
export default Favourites;