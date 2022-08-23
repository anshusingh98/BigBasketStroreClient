import './App.css';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'


function App() {
 

  
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path='*' element={<Homepage/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
