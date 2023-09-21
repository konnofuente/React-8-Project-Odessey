import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './card_style.css'
import Menu from './components/menu'
import Header from './components/header'
import Footer from './components/footer'





function App() {
    return <div className='container' >
        <Header />
        <Menu />
        <Footer />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// a saver way to rendre the app componenet atleast twice 
root.render(<React.StrictMode><App /></React.StrictMode>);