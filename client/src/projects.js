import { useState, useEffect } from 'react';

import  Project1  from "./project1.js";
import  Project2  from "./project2.js";
import  Project3  from "./project3.js";
import  Project4  from "./project4.js";
import  Project5  from "./project5.js";
import  Project6  from "./project6.js";
import  Project7  from "./project7.js";

export default function Projects() {

    let [show, setShow] = useState();


    useEffect(() => {
        setShow([1,0,0,0,0,0,0,0]);
        
    }, []);

    function btnClickHandler0(e) {
        e.preventDefault();
        setShow([1,0,0,0,0,0,0,0]);
    }
    function btnClickHandler1(e) {
        e.preventDefault();
        setShow([0,1,0,0,0,0,0,0]);
    }
    function btnClickHandler2(e) {
        e.preventDefault();
        setShow([0,0,1,0,0,0,0,0]);
    }
    function btnClickHandler3(e) {
        e.preventDefault();
        setShow([0,0,0,1,0,0,0,0]);
    }
    function btnClickHandler4(e) {
        e.preventDefault();
        setShow([0,0,0,0,1,0,0,0]);
    }
    function btnClickHandler5(e) {
        e.preventDefault();
        setShow([0,0,0,0,0,1,0,0]);
    }
    function btnClickHandler6(e) {
        e.preventDefault();
        setShow([0,0,0,0,0,0,1,0]);
    }
    function btnClickHandler7(e) {
        e.preventDefault();
        setShow([0,0,0,0,0,0,0,1]);
    }

    return (
        <>
            <h1 className="name">Projects List</h1>

            <div className="container">

                <div className="col1">
                    <ul className="project-bar">
                        <li><a onClick={btnClickHandler0} href="">• Truth or Dare</a></li>
                        <li><a onClick={btnClickHandler1} href="">• Social Network</a></li>
                        <li><a onClick={btnClickHandler2} href="">• Image Board</a></li>
                        <li><a onClick={btnClickHandler3} href="">• Petition</a></li>
                        <li><a onClick={btnClickHandler4} href="">• News Ticker</a></li>
                        <li><a onClick={btnClickHandler5} href="">• Connect Four</a></li>
                        <li><a onClick={btnClickHandler6} href="">• Ping Pong</a></li>
                    </ul>
                </div>

                {show!= undefined && 
                <div className="col2">
                    {show[0]===1 && <Project1 />}
                    {show[1]===1 && <Project2 />}
                    {show[2]===1 && <Project3 />}
                    {show[3]===1 && <Project4 />}
                    {show[4]===1 && <Project5 />}
                    {show[5]===1 && <Project6 />}
                    {show[6]===1 && <Project7 />}
                </div>
                }

            </div>

                
                



        </>
    );
}