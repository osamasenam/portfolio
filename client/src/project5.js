import { useState, useEffect } from 'react';

export default function Project5() {

    let [count, setCount] = useState();

    const projectArr = ["/ticker1.png","/ticker2.png"] ;

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

            <div className="project project5">
                <h2>News Ticker - Twitter API</h2>
                <p>- Running news ticker</p>
                <p>- News headlines are fetched from Twitter news pages</p>
                    
                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>Node</h3><h3>Express</h3><h3>https</h3>
                <h3>HTML</h3><h3>CSS</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/twitter-news-ticker"><img className="click-icon" src="/git-click.png"></img></a>
                </div>
            </div>


        </>
    );
}