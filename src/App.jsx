import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";
import { useEstadosGlobales } from "./Components/utils/global.context";


function App() {
  const { providerValue } = useEstadosGlobales();
  const { state} = providerValue;
  
  return (
      <div className={state.theme}>
      <Navbar/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.detail}  element={<Detail/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/> 
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;