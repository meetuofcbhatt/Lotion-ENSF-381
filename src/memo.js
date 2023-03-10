import React, {useState} from "react";
import {Link} from 'react-router-dom';

function Memo({memo}, {memolist})
{
    //var indexof = memolist.findIndex(note => memo.id === note.id);
   console.log(memolist)
    
//    to='notes/${indexof}'
    

    return(

        <Link  >
            
            <div className="memoTag">
                {memo.id}
            </div>

        </Link>
        
    )

}



export default Memo;