import React, { useState } from 'react'

const FoodSearch = () => {
    const [search,setSearch] = useState('')
    const YOUR_APP_ID = "e30cad20"
    const YOUR_APP_KEY = "e33cf8935331e73e29090ed7a1c63756"
    const handleChange = (event)=>{
        setSearch(event.target.value)
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then
        ((res)=>{const data =res.json();console.log(data)}).catch(()=>console.log('failed in getting data'))
        // console.log(search)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type={search} onChange={handleChange}  /> <br/>
        <input type="submit" value='search'></input>
        </form>
        
    </div>
  )
}

export default FoodSearch
