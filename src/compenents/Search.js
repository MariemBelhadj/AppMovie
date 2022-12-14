import React from "react"
import Rate from './Rate'
import SearchIcon from '@mui/icons-material/Search';
import './nav.css'
import {Link} from 'react-router-dom'

function Search( {handleSearch,setRatingSearch , ratingSearch}){
    return(
        <div>
             <div className='nave' >
                
            
        <Link to="/" className="home">Home</Link>
                <form>
                    <div className="navSearch">
                    
                    <SearchIcon  fontSize="medium" className="" />
                    <input  onChange={handleSearch}  type="search" placeholder="Search Movie Name"/>
                    </div>
                  
                </form>
                <div  style={{marginLeft:"50px"}}>
            <Rate ChangeRatingSearch={setRatingSearch} rate={ratingSearch}/>
            </div>
         
            </div>
           
        </div>
    )
}
export default Search;