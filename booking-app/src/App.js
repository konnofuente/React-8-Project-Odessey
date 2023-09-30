import { useState , useEffect} from 'react';
import './App.css';
import LoadingScreen from './components/Loading/LoadingScreen';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './container/Home/Home';
import './globalStyles.css'



function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <div className="App">

      {
        isLoading ?
        <LoadingScreen/>
        : <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/AroundMe" element={<AroundMe />} />
            <Route path="/Search" element={<FindProperty />} />
            <Route path="/text" element={<Test />} /> */}
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;


