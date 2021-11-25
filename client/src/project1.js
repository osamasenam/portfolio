import { useState, useEffect } from 'react';

export default function Project1() {

    let [count, setCount] = useState();

    const projectArr = ["/spining-bottle1.png", "/spining-bottle2.png", "/spining-bottle3.png"] ;

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
                <h2>Truth or Dare – Spinning Bottle Game</h2>
                <p>- Multi-player game requires 4 online players who can interact through a chat-box </p>
                <p>- Each player can have own profile with login/logout feature</p>
                <p>- The game instructions are given by a chat-bot</p>

                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <div className="tags">
                    <h3>React</h3><h3>Redux</h3><h3>Router</h3><h3>PostgreSQL</h3>
                    <h3>Node</h3><h3>Express</h3><h3>socket.io</h3>
                    <h3>SES</h3><h3>S3</h3><h3>Heroku</h3>
                    <h3>HTML</h3><h3>CSS</h3><h3>Canvas</h3><h3>Javascript</h3> 
                </div>

                <div className="links">
                    <a href="https://github.com/osamasenam/truthordare"><img className="click-icon" src="/git-click.png"></img></a>
                    <a href="https://truthordare-spinning.herokuapp.com/"><img className="click-icon" src="/heroku-icon.png"></img></a>
                </div>
            </div>
        </>
    );
}