import { useState, useEffect } from 'react';

export default function Project7() {

    let [count, setCount] = useState();

    const projectArr = ["/pingpong1.png","/pingpong2.png"] ;

    useEffect(() => {
        setCount(0);
       
    }, []);

    function btnClickHandler() {
        console.log("button clicked");
        if(count == projectArr.length - 1) {
            setCount(0);
        } else {
            setCount(count+1);
        } 
    }
    
    return (
        <>

            <div className="project">
                <h2>Ping Pong Game</h2>
                <p>- Interactive game against the computer</p>

                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>HTML</h3><h3>CSS</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/project6_js_pingpong"><img className="click-icon" src="/git-click.png"></img></a>
                </div>
            </div>


        </>
    );
}