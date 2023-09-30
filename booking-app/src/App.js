import { useState , useEffect} from 'react';
import './App.css';
import LoadingScreen from './components/Loading/LoadingScreen';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './container/Home/Home.jsx';
import AroundMe from './container/AroundMe/AroundMe';
import './globalStyles.css'
import Footer from './components/Footer/Footer';
import FindProperty from './container/Find/FindProperty';



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
            <Route path="/AroundMe" element={<AroundMe />} />
            <Route path="/search" element={<FindProperty />} />
            {/* <Route path="/AroundMe" element={<AroundMe />} />
            <Route path="/Search" element={<FindProperty />} />
            <Route path="/text" element={<Test />} /> */}
          </Routes>

          <Footer />
        </div>
      }
    </div>
  );
}

export default App;


