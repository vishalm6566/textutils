import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'rgb(33,37,41,0.9)'
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils-Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light Mode has been enabled", "success")
      document.title = "TextUtils-Light mode"


    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About textUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

      {/* <div className="container my-5" >

        exact keyword use to match exact path

        <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </div> */}

    </>
  )
}
export default App;
