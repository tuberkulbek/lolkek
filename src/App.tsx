import './main.scss';
import Display from './components/Display/display';
import Header from './components/Header/header';
import ListPage from './components/ListPage/listPage';
import SingleItem from './components/SingleItem/singleProduct';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <Display />
        <Routes>
          <Route path={`/`} element={<ListPage />}/>
          <Route path={`/product`} element={<SingleItem />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
