// import React from "react";
import React, {useState, useEffect} from "react";
import Clock from './components/Clock'
import Video from './video/smoke3.mp4'
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 8000); 
    })
    return (
        <div>
            {isLoading===true?
            <Video/>: 
            <hidden/>
            }      
        </div>
    );
}
// const Video = () => {
//     return (
//       <div className="container">
//         <video autoPlay playsInline muted src={video} />
//       </div>
//     );
//   };
//   function App() {
//     return (
//       <div className="App">
//         <div className="app-container">
//           <Video />
//         </div>
//       </div>
//     );
//   }

export default App;
