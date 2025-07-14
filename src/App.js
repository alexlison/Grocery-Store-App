import logo from './logo.svg';
import './App.css';
import AddGroceryItem from './Components/AddGroceryItem';
import SearchItem from './Components/SearchItem';
import DeleteItem from './Components/DeleteItem';
import ViewItem from './Components/ViewItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <AddGroceryItem /> } />
    <Route path='search' element={ <SearchItem /> } />
    <Route path='delete' element={ <DeleteItem /> } />
    <Route path='view' element={ <ViewItem /> } />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
