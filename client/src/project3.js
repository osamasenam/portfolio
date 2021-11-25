import { useState, useEffect } from 'react';

export default function Project3() {

    let [count, setCount] = useState();

    const projectArr = ["/image-board1.png", "/image-board2.png"] ;

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
                <h2>Image Board – similar to Instagram</h2>
                <p>- Shows the latest uploaded photos</p>
                <p>- Users can add images</p>
                <p>- Click on any image to open a modal where comments can be added</p>
                <p>- Click on More button to view more images</p>
                    
                <div className="img-btn">
                    <img src={projectArr[count]}></img>
                    <img className="next-btn" onClick={btnClickHandler} src="/next-icon.png"></img>
                </div>

                <h3>Vue</h3><h3>PostgreSQL</h3>
                <h3>Node</h3><h3>Express</h3><h3>S3</h3>
                <h3>HTML</h3><h3>CSS</h3><h3>Javascript</h3> 

                <div className="links">
                    <a href="https://github.com/osamasenam/imageboard"><img className="click-icon" src="/git-click.png"></img></a>
                </div>
            </div>


        </>
    );
}