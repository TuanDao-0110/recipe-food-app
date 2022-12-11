import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddRecipe from './pages/add-recipe/AddRecipe';
import Home from './pages/home/Home';
import Template from './pages/template/Template.jsx'
function App() {
  return (
    <Routes>
      {/* <Template /> */}
      <Route path='/' element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path='add' element={<AddRecipe />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
