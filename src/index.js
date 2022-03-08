import { render } from "react-dom";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import '../src/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/css/styles.css';
import './index.css';
import App from "./App";
import Footer from "./Components/Footer/Footer"
import Header from './Components/Header/Header';

// RoutePages
import Iphone from "./Components/RoutePages/Iphone/Iphone";
import Mac from "./Components/RoutePages/Mac/Mac";
import Ipad from "./Components/RoutePages/Ipad/Ipad";
import Accessories from "./Components/RoutePages/Accessories/Accessories";
import Cart from "./Components/RoutePages/Cart/Cart";
import Support from "./Components/RoutePages/Support/Support";
import TV_Home from "./Components/RoutePages/TV_Home/TV_Home";
import Watch from "./Components/RoutePages/Watch/Watch";
import AirPods from "./Components/RoutePages/AirPods/AirPods"
import Four04 from "./Components/RoutePages/Four04/Four04";
import Productpage from "./Components/RoutePages/Productpage/Productpage";
import Store from "./Components/RoutePages/Store/Store"
import Search from "./Components/RoutePages/Search/Search";


const rootElement = document.getElementById("root");
render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/store" exact element={<Store />} />
      <Route path="/Mac" element={<Mac />} />
      <Route path="/Ipad" element={<Ipad />} />
      <Route path="/Iphone" element={<Iphone />} />
      <Route path="/Watch" element={<Watch />} />
      <Route path="/airpods" element={<AirPods />} />
      <Route path="/tv_home" element={<TV_Home />} />
      <Route path="/Accessories" element={<Accessories />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/iphone/:pid" element={<Productpage />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/*" element={<Four04 />} />
      <Route path="/iphone/:pid" element={<Productpage/>} />
    </Routes>
    <Footer />
  </Router>,


  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

