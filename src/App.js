// import React from "react";
import Clock from './components/Clock'
// import Video from './components/smoke'
import Video from './/video/smoke3.mp4'
import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000); 
    })
    return (
        <div>
            {isLoading==true?
            <Video/>: 
            <Clock/>
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
