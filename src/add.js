import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
const Add = () => {
       let history = useHistory();
       let [Title,setTitle]=useState('')
       let[Genre,setGenre]=useState('')
       let[Cast,setCast]=useState('')
       let[Quote,setQuote]=useState('')
       let[Language,setLanguage]=useState('')

      let handleSubmit = (e) =>{
          e.preventDefault();
          let data={Title,Genre,Cast,Quote,Language}
          fetch('http://localhost:7000/series',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify(data)
          })
          .then(()=>{
              alert('data added successfully')
              history.push('/favourites')
          })

      }


    return ( 
        <div className="adding">
              <form onSubmit={handleSubmit}>
              <h1>Enter movie details</h1>
            <label htmlFor=""><b>Title</b></label><br /><input className='title' type="text" required value={Title} onChange={(e)=>{setTitle(e.target.value)}} /><br />
            <label htmlFor=""><b>Genere</b></label><br /><input type="text" className='title' required value={Genre}  onChange={(e)=>{setGenre(e.target.value)}} /><br />
            <label htmlFor=""><b>Cast</b></label><br /><input type="text" className='title' required value={Cast}  onChange={(e)=>{setCast(e.target.value)}} /><br />
            <label htmlFor=""><b>Quote</b></label><br /><input type="text" className='title' required value={Quote}  onChange={(e)=>{setQuote(e.target.value)}} /><br />
            <label htmlFor=""><b>Language</b></label><br /><input type="text" className='title' required value={Language}  onChange={(e)=>{setLanguage(e.target.value)}} /><br />
            <button id='btnadd'>Submit</button>
              </form>

        </div>
     );
}
 
export default Add;