import logo from './logo.svg';
import './App.css';
import AddGroceryItem from './Components/AddGroceryItem';
import SearchItem from './Components/SearchItem';
import DeleteItem from './Components/DeleteItem';
import ViewItem from './Components/ViewItem';

function App() {
  return (
    <div>
      <AddGroceryItem />
      <SearchItem />
      <DeleteItem />
      <ViewItem />

    </div>
  );
}

export default App;
