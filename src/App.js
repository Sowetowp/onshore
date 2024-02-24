import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Toaster } from "react-hot-toast";
import Loadable from "react-loadable";
import Preloader from "./Components/Preloader";

const Home = Loadable({
	loader: () => import("./Pages/Home"),
	loading: Preloader,
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Preloader/>}/>
        </Routes>
      </Router>
      <Toaster/>
    </>
  );
}

export default App;