import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Buynow from './component/buynow/Buynow';
import Header from './component/header/Header';
import CartDetail from './component/Home/CartDetail';
import AddtoCartMainDetail from './component/Home/DetailView/AddtoCartMainDetail';
import Detailview from './component/Home/DetailView/ProductsDetailview';
import Home from './component/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Product-Detailview' element={<Detailview />} />
        <Route path='add.tocartand.detailview' element={<AddtoCartMainDetail />} />
        <Route path='/cartdetail' element={<CartDetail />} />
        <Route path='/buynow' element={<Buynow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
