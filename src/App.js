
import React from "react"

// Home page

import SecondBodySection from "./Components/HomePage/SecondBodySection"
import ThirdBodySection from "./Components/HomePage/ThirdBodySection"
import FourthBodySection from "./Components/HomePage/FourthBodySection"
import FifthBodySection from "./Components/HomePage/FifthBodySection"
import FirstBodySection from "./Components/HomePage/FirstBodySection"

class App extends React.Component{
  render() {
    return(
      <div>
        <FirstBodySection />
        <SecondBodySection />
        <ThirdBodySection />
        <FourthBodySection />
        <FifthBodySection />
      </div >
  );
}
}



export default App;


// const express = require('express');
// const app = express();
// const path = require('path');
// const port = process.env.PORT || 3000;
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('build'));
//   app.get('*', (req, res) => {
//     req.SendFile(path.resolve(__dirname, 'build', 'index.html'));
//   })
// }
// app.listen(port, (err, res) => {
//   if (err) return console.error(err);
//   console.log("Server running on port: ",port);
// })