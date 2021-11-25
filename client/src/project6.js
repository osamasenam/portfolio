import { useState, useEffect } from 'react';

export default function Project6() {

    let [count, setCount] = useState();

    const projectArr = ["/connectfour1.png","/connectfour2.png","/connectfour3.png"] ;

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

    function linkClickHandler(e) {
        console.log("button clicked");
        e.preventDefault();
        fetch('/connect4')
            .then(results => {
                console.log('results: ', results.body);
            })
            .catch((err) => {
                console.log("catch error:",err);
            });
    }
    
    return (
        <>

            <div className="project">
                <h2>Connect Four Game</h2>
                <p>- The user can enter number of rows & coloumns & win condition</p>
                <p>- Each player can choose a color</p>
                <p>- Allow players to play using only Keyboard/Mouse</p>
                <p>- The gameplay involves animation of checkers falling</p>

                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>jQuery</h3>
                <h3>HTML</h3><h3>CSS</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/connect4"><img className="click-icon" src="/git-click.png"></img></a>
                </div>
            </div>


        </>
    );
}