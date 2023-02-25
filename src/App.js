
import './App.css';
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import HomePage from './pages/mainPages/HomePage/HomePage';
import LoginPage from './pages/authPages/LoginPage/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage/RegisterPage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import PublicLayout from './routes/publicLayout/PublicLayout';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route element={<PublicLayout />}>
     <Route path='/' element={<HomePage />} />
     <Route path='/login' element={<LoginPage/>}/>
     <Route path="/register" element={<RegisterPage />} />
     </Route>
   
     <Route path="*" element={<PageNotFound />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
