import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { IoSearchOutline } from "react-icons/io5";
import CardUser from '../components/CardUser';
export default function Search() {
    const [searchValue,setSearchValue]=useState('')
    const handleSearch = ()=>{}
  return (
    <>
        <NavBar></NavBar>
        <div className="search-box">
            <input type="text" placeholder='Find recipe' value={searchValue} onChange={e=>{setSearchValue(e.target.value)}} />
            <IoSearchOutline onClick={handleSearch}/>
        </div>
        <div className="filter">
            <span>Filter by category: </span>
            <label>
                <input type="radio"  name='filter'/>
                Breakfast
            </label>
            <label>
                <input type="radio"  name='filter'/>
                Lunch
            </label>
            <label>
                <input type="radio"  name='filter'/>
                Snack
            </label>
            <label>
                <input type="radio"  name='filter'/>
                Dinner
            </label>
        </div>
        <div className="card-container">
        <CardUser title="Title" ingredients={JSON.stringify(["apple","ball"])} instruction={JSON.stringify(["eat","sleep","repeat"])}></CardUser>
        <CardUser title="Title1" ingredients={JSON.stringify(["apple","ball"])} instruction={JSON.stringify(["eat","sleep","repeat"])}></CardUser>
        <CardUser title="Title2" ingredients={JSON.stringify(["apple","ball"])} instruction={JSON.stringify(["eat","sleep","repeat"])}></CardUser>
        <CardUser title="Title3" ingredients={JSON.stringify(["apple","ball"])} instruction={JSON.stringify(["eat","sleep","repeat"])}></CardUser>
        </div>


    </>
  )
}
