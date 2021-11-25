import { useState, useEffect } from 'react';

export default function Project4() {

    let [count, setCount] = useState();

    const projectArr = ["/petition1.png","/petition2.png","/petition3.png","/petition4.png","/petition5.png","/petition6.png",] ;

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
                <h2>Petition online</h2>
                <p>- Explains the petition issue</p>
                <p>- Users can register & sign the petition</p>
                <p>- User's profile can be modified</p>
                <p>- The signers can be sorted according to the city</p>
                    
                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>Express-handlebars</h3><h3>PostgreSQL</h3>
                <h3>Node</h3><h3>Express</h3><h3>Heroku</h3>
                <h3>HTML</h3><h3>CSS</h3><h3>Canvas</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/petition"><img className="click-icon" src="/git-click.png"></img></a>
                    <a href="https://goodmonkey.herokuapp.com/"><img className="click-icon" src="/heroku-icon.png"></img></a>
                </div>
            </div>


        </>
    );
}