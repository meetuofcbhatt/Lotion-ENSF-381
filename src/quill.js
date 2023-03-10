import ReactQuill from 'react-quill';
import {useQuill} from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import formatDate from './formatCalender';
import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

//declearing useOutletContext


function Quill()
{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };


    var currentDate = new Date();
    currentDate = formatDate(currentDate);
    var [calen, setCalen] = useState("");
    
    const dataUpdate = (event) =>{
        calen = setCalen(event.target.value)
    }

    const {notes, setNotes} = useOutletContext();
    const { quill, quillRef } = useQuill();
    console.log({notes});
    

    //Final inputs
    console.log(formatDate(calen));//date
    console.log(currentDate);

    //to chaeck if there is any calen inputs
    if(calen == "")
    {
        console.log("calen is null");
    }
    //param
    const param = useParams();
    const notesid = param.notesid;
    console.log("notesid: "+(parseInt(notesid, 10)+51));
    return(
    
    
    <>
    
    
    <div className="right">
        <div className='righttop'>
            <div className='twoinput'>
                <input id="titleInt" placeholder="Untitled"></input>
                {/* value is saved as calen */}
                <input value={calen} id="calender" type="datetime-local" onChange={dataUpdate} />
            </div>
            
            <div className="rtbutton">
                <button className="savebtn" onClick={Print} >Save</button>
            </div>
            <div className="rtbutton">
                <button className='delbtn' onClick={delete_str}>Delete</button>
            </div>
        </div>
         <ReactQuill ref={quillRef} theme="snow" className="noquill"/> 
        <div className="quill" >
            <div  ref={quillRef} />
        </div>
        {/* <div style={{ width: 500, height: 300, border: '1px solid lightgray' }}>
            <div ref={quillRef} />
        </div> */}
    </div>
   
    

    
    
    
    
    </>


    );

    function Print()
    {
        
        //console.log(quill.getText());
        // console.log(quill.getContents())
        // console.log(quill.root.innerHTML);
        
        

        const element = document.getElementById("change");
        // element.innerHTML = quill.root.innerHTML;
        const contentTitle = document.getElementById("titleInt").value;
        console.log({contentTitle});//

        

        //initalize the newObject
        let newObject = 

            {
                index: parseInt(notesid, 10),
                title: contentTitle, 
                content : quill.root.innerHTML, 
                formattedDate : "",
                id : "" //need to do this.
              };

        console.log("newObject.index: " + newObject.index);
        
        //assign the date to the object.
        if(calen != "")
        {
            newObject.formattedDate = formatDate(calen);
        }
        else
        {
            newObject.formattedDate = currentDate;
        }



        if(localStorage.getItem("object") == null)
        {
            let item = [];


            let object = 

            {
                index: notesid,
                title: contentTitle, 
                content : quill.root.innerHTML, 
                date : document.getElementById('calender').value, 
                formattedDate : "",
                id : notes.id
              };
            console.log(object.id);
            item.unshift(object);
            let obj_serialized = JSON.stringify(item);
            localStorage.setItem("object", obj_serialized);
        }
        else
        {
            //localStorage.removeItem("object");
             let item = JSON.parse(localStorage.getItem("object"));
             let object = {
                title: contentTitle,
                HTML: quill.root.innerHTML
            };
            // let append_list = [];
            item.unshift(object);
            let obj_serialized = JSON.stringify(item);
            localStorage.setItem("object", obj_serialized);
            // append_list.push(quill.root.innerHTML);

            // object.unshift(append_list);
            // localStorage.setItem("object", object);
        }
        console.log(localStorage.getItem("object"));

        console.log(localStorage.getItem("object"));

        const item = JSON.parse(localStorage.getItem("object"));
        const object = item[0];
        console.log("title");
        console.log(item[9]);
    }
}


function delete_str()
{
    localStorage.clear();
}

export default Quill;