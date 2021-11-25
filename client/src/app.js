import  About  from "./about.js";
import  Projects  from "./projects.js";
import  Contact  from "./contact.js";

import { BrowserRouter, Route} from "react-router-dom";


export default function App() {
    return(
        <BrowserRouter>
            <>
                <ul className="nav-bar">
                    <li><a href="/">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </>

            <Route exact path="/">
                <About />
            </Route>

            <Route path="/projects">
                <Projects />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

        </BrowserRouter>
    ) ;
}