import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import DistantWork from "./distantWork/DistantWork";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Main from "./main/Main";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork />
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
