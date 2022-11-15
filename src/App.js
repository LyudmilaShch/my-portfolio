import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import DistantWork from "./distantWork/DistantWork";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Main from "./main/Main";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistantWork />
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
