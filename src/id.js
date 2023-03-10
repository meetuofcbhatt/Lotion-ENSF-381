import { useParams } from "react-router-dom";
import Notes from './notes';
import { useOutletContext } from "react-router-dom";

function Id()
{
    
    // console.log("Start");
    // console.log(window.location);
   
    return(<>
        
            <div className="flexx">
                <div className="webad">
                    <h1 id='webad'>Select a note, or create a new one.</h1>
                </div>
            </div>
            
        </>




    );
}

export default Id;