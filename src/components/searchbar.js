import {useState} from 'react'
import './component.css';

export default function SearchBar(props) { 
      const [innerSearch, setInnerSearch] = useState(""); 
      return ( 
        <div> 
          <input 
            aria-labelledby="search-button" 
            name="search" 
            id="search" 
            type={props.type}
            placeholder={props.searchName}
            value={innerSearch} 
            onChange={e => setInnerSearch(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                props.onSubmit(innerSearch)
              }
            }}
          />
        </div> 
      ); 
    }