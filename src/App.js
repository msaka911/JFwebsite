import logo from './logo.svg';
import './App.css';
import { Route, Routes, useRoutes} from 'react-router-dom';
import Layout from './UI/Layout';
import MainContent from './components/MainContent';
import Quote from './components/Quote'
function App() {
  return (
<Layout>
  <Routes>
     <Route path='/*' element={<MainContent/>} />
     <Route path='/quote' element={<Quote/>} />
  </Routes>


</Layout>
  
  )
}

export default App;
