import { useState } from "react";
//Create print out for create tab
const Create = () =>{

    //variables for the form
    const[title,setTitle]=useState('');
    const[year,setYear]=useState('');
    const[poster,setPoster]=useState('');

    //handle submittion from the button and log the information to console
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title);
        console.log(year);
        console.log(poster)
        
    }
    return(
    <div>
        <h3>Hello from the Create components</h3>
        {/*Handle the new event form button click and log the information in the form to the console */}
        <form onSubmit={handleSubmit}>
            {/*Submit form */}
            <div className="form-group">
                {/*title*/}
                <label>Add Movie Title</label>
                <input type="text" className="form-control" value={title}
                onChange={(e)=>{setTitle(e.target.value)}}/>
                {/*Year*/}
                <label>Add Movie Year</label>
                <input type="text" className="form-control" value={year}
                onChange={(e)=>{setYear(e.target.value)}}/>
                {/*Poster*/}
                <label>Add Movie Poster</label>
                <input type="text" className="form-control" value={poster}
                onChange={(e)=>{setPoster(e.target.value)}}/>

            </div>
            <div>
                <input type="submit" value="Add Movie"></input>
            </div>      
        </form>
    </div>
    );
    

};
export default Create;