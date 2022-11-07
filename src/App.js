import logo from './logo.svg';
import './App.css';
import { Route, Routes, useRoutes} from 'react-router-dom';
import Layout from './UI/Layout';
import MainContent from './components/MainContent';
import Quote from './components/Quote'
import Opening from './components/Opening';
function App() {
  return (
<Layout>
  <Routes>
     <Route path='/*' element={<Opening/>} />
     <Route path='/home' element={<MainContent/>} />
     <Route path='/quote' element={<Quote/>} />
  </Routes>
</Layout>


  
  )
}

export default App;
