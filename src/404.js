import error from './images/404.jpeg'
const Error = () => {
    return ( 
         <div className="pagenotfound">
             <img src={error} alt="" style={{height:"500px",width:"100%"}}/>
         </div>
     );
}
 
export default Error;