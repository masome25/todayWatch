
import axios from 'axios'
import React, { useEffect , useState} from 'react'



function Pages() {
   
    const[externalId, setExternalId]=useState('')
    async function getExternalId () {
        const data = await axios.get('https://api.themoviedb.org/3/movie/145/external_ids?api_key=b1b8932c621313a29fd6d714a90f292e')
   console.log(data)
   setExternalId(data)
    }

    useEffect(()=>{
        getExternalId()
    },[])

  return (
    <div className='page'>
     
       <div >
      
       {/* <iframe width="400" height="300" 
       src=`https://www.youtube.com/embed/${}`
     
        >
        </iframe> */}
      
       </div>
       <div>
        <p>title</p>
        <p>review</p>
        <p>bjk</p>
       </div>
    </div>
    
  )

}

export default Pages