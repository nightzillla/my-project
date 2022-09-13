import React from "react";
// import React, {useState, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

function App () {
    return (
        <div className="App">
            Hello
        </div>
    );
}



// function App() { //testing code for loader 
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false)
//         }, 8000); 
//     })
//     return (
//         <div>
//             {isLoading===true?
//             <Video/>: 
//             <hidden/>
//             }      
//         </div>
//     );
// }
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
