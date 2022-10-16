import './App.css';
import Main from './compenents/Main';
import{BrowserRouter,Route,Routes,Link} from "react-router-dom"
import MoviesList from './compenents/MoviesList';
import MovieDetail from './compenents/MovieDetail';
function App() {
  return (
    <div>
      
      <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/:id" element={<MovieDetail/>} />
            </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;