import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from './layout';
import Index from './index';
import Quill from './quill';
import Notes from "./notes";
import Id  from "./id";


function App() 
{
  return (
  
  
  // <h1>Lotion</h1>
  //function names have to capitalized for it to work.

  <BrowserRouter>
    <Routes>
        
        
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Navigate to="/notes"/>}></Route>
            <Route path="notes" element={<Id/>}></Route>
            <Route path="notes/:notesid" element={<Notes/>}>

            </Route>
            <Route path="notes/testing" element={<Index />}></Route>
            <Route path="notes/:notesid/edit" element={<Quill />}></Route>

        </Route>
          
        
      </Routes>
  
  </BrowserRouter>
  
  
  );
}

export default App;
