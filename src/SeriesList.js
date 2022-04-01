import bin from './images/bin.png'
const SeriesList = (props) => {
    let seriesData=props.data
    let title=props.pageTitle
    let clickImage=props.delete

    return ( 
        <div className="serieslist">
            <h1 style={{textAlign:"center", color:"midnightblue" }}>{title}</h1>
           
            {seriesData.map((value)=>{
                return(
                    <div className="display">
                        <h1>Title:{value.Title}</h1>
                        <h2>Genre:{value.Genre}</h2>
                        <img src={bin} alt=""  onClick={()=>clickImage(value.id)}  />

                    </div>
                )
            })}
        </div>
     );
}
 
export default SeriesList;