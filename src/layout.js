
import {Link, Outlet, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import uuid from 'react-uuid';
import ListMemo from './listMemo';

let countIndex = 0;

function Home()
{
  //intializing the state varibles in this funciton.
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  
  function addMemo()
  {

    var newnote = 
    {
      index: notes.length,
      title: "Untitled", 
      content : "", 
      formattedDate : "",
      id : uuid()
    }
    
    setNotes(preNotes =>{
      return [newnote, ...preNotes]
    })

    if(notes.length > 0)
    {
      navigate("notes/0/edit");
    }
    console.log(notes);
    console.log(notes.length)
  }
  
  return (<>
    <link rel="stylesheet" href="index.css"></link> 
    <div className="purple"></div>
    
    <nav className="top-bar">
       
        <button className="side-bar-button" onClick={toggleSidebar}>&#9776;</button>
       
        <div className="lotion-title">
          <h2 className="title">Lotion</h2>
          <p className="title">Like Notion, but worse.</p>
        </div>
    </nav>

    <div className="main">
        <div id ="leftbar" className="hidden">
            <div id="leftTop">
              <h2 className="lefttitle">Notes</h2>
              <button onClick={addMemo} id="plus"><h2>+</h2></button>
            </div>
            
            {
              notes.map(memo =>{
                let indexof = notes.findIndex((note) => note.id === memo.id);
                memo.index = indexof;
              })
            }


            
            <div className="scroll">{/*make it scrolable*/}
              {notes.map(memo =>{
                var indexof = notes.findIndex((note) => note.id === memo.id);
                const textadd = `/notes/${indexof}`
                

                return <nav id="memobox">
                          <Link to={textadd} >
                
                              <div>
                                  <h3>{memo.title}</h3>
                                  <p className="memobox">{(memo.id.substr(0,50) + "..." + memo.index)}</p>
                              </div>

                          </Link>

                        </nav>
              })}
            </div>
            {/* <ListMemo memolist = {notes} listlen={notes.length}/> */}
            

        </div>
        <div className="right">
          <Outlet context={[notes, setNotes]} />
           
        </div>
    </div>
    
    <Link to="/notes/testing">Testing page</Link>
    
  </>);

  function toggleSidebar()
  {
    console.log("function toggleSidebar is called");
    const sideBar = document.getElementById("leftbar");
    sideBar.classList.toggle("hidden");
    console.log("Executed");


    console.log(localStorage.getItem("object"));

    console.log(localStorage.getItem("object"));

    const item = JSON.parse(localStorage.getItem("object"));
    const object = item[0];
    console.log("title");
    console.log(item[0]);

  }
}




export default Home;
