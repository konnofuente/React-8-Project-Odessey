import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './card_style.css'
import Menu from './components/menu'
import Header from './components/header'
import Footer from './components/footer'
import Skill from './components/skill'
import SkillList from './components/skillList'
import Avatar from './components/avatar'
import Intro from './components/intro'





function App() {
    return <div className='container' >
        <Header />
        <Menu />
        <Footer />
    </div>
}



// developer card display exercise 

// function App() {
//     return (
//         <div className="card">
//             <Avatar image='pizzas\focaccia.jpg' />
//             <div className="data">
//                 <Intro 
//                 name='Konno Meli' 
//                 info="lorem mfdfk jnfskms kfmksdfmksf kmskfmkdfs mkmfkmkmdf mfkmdkfmdkm fmkmdfkmkdf mkfmkdfmlms msdlmdslmsd " 
//                 />
//                 <SkillList />
//             </div>
//         </div>
//     );
// }



const root = ReactDOM.createRoot(document.getElementById("root"));

// a saver way to rendre the app componenet atleast twice 
root.render(<React.StrictMode><App /></React.StrictMode>);