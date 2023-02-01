import './App.css';
import {Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from './pages/About';
import Products from './pages/Products';
import SingleProducts from './pages/SingleProducts';
import Contacts from './pages/Contacts';
import Category from './pages/Category';


function App() {
  return (
   <Layout>
     <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
             {/* <Route path=':category' element={<Category/>}/> */}
          {/* </Route> */}
          <Route path='/products/:id' element={<SingleProducts/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
    </div>
   </Layout>
  );
}

export default App;
