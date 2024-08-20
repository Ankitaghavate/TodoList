import React from "react";
import { useState } from "react";

export const AddTodo=({addTodo})=>{
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot Blank")
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return(
        <div classNameName="container">
            <h3 className="text-center my-4">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-6 mx-5">
                    <label htmlFor="title" className="form-label ">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
                    
                </div>

                <div className="mb-3 mx-5">
                    <label htmlFor="desc"  className="form-label">Todo Description</label>
                    <input type="text"  value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
  <button type="submit" className="btn btn-sm btn-success mx-5 ">Submit</button>
</form>
        </div>
    )
}