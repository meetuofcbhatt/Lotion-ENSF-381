import Memo from './memo';
import React, {useState} from 'react';

function ListMemo({memolist})
{

    
    return(
        memolist.map(memo =>{
            return <Memo memo={memo} memolist={memolist}/>
        })
    )
}


export default ListMemo;