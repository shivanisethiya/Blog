
import './App.css';
import { About } from './pages/About';
import { BlogDetail } from './pages/BlogDetail';
import { Home } from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import { SearchResults } from './component/SearchResults';
function App() {
  return (
    <div className="App">
             <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/search" element={<SearchResults />} /> 
             </Routes>
             
    </div>
  );
}

export default App;
