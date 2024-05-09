import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   const [mode, setMode] = useState("dark");
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type,
      });
      setTimeout(() => {
         setAlert(null);
      }, 1500);
   };

   const togglemode = () => {
      if (mode === "light") {
         setMode("dark");
         document.body.style.background = "#000";
         showAlert("Dark mode has been enabled", "success");
      } else {
         setMode("light");
         document.body.style.background = "#fff";
         showAlert("Light mode has been enabled", "success");
      }
   };

   return (
      <>
         <Router>
            <Navbar title="TextUtils By Jay Keraliya" mode={mode} toggleMode={togglemode} />
            <Alert alert={alert} />
            <Switch>
               <Route path="/about">
                  <About mode={mode} />
               </Route>
               <div className="container my-3">
                  <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
               </div>
            </Switch>
         </Router>
      </>
   );
}

export default App;
