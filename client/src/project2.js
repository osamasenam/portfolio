import { useState, useEffect } from 'react';

export default function Project2() {

    let [count, setCount] = useState();

    const projectArr = ["/social-network1.png", "/social-network2.png","/social-network3.png","/social-network4.png","/social-network5.png"] ;

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
                <h2>Social Network – similar to Facebook</h2>
                <p>- User Registration/Login - Reset password through Email</p>
                <p>- Profile photo upload - Profile Biography add/edit</p>
                <p>- Find Friends - Check other profiles</p>
                <p>- Add/Remove friends - Chat</p>
                    
                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>React</h3><h3>Redux</h3><h3>Router</h3><h3>PostgreSQL</h3>
                <h3>Node</h3><h3>Express</h3><h3>socket.io</h3>
                <h3>SES</h3><h3>S3</h3>
                <h3>HTML</h3><h3>CSS</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/social-network"><img className="click-icon" src="/git-click.png"></img></a>
                </div>
            </div>


        </>
    );
}