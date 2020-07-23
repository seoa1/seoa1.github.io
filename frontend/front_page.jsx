import React from 'react';

const FrontPage = () => (
    <div>
        <div className="greeting">
            <h1>Hi, I'm Andrew.</h1>
            <h2>I'm currently studying CS at <span style={{fontSize: "25px", color: "#B22222"}}>ASU</span>, and I have a degree in Biochemistry from <span style={{fontSize: "25px", color:"#d4af37"}}>Vanderbilt</span>.
                <br/>
                Thanks for coming to my website!
            </h2>
            <h3 className="proj_head">
                Personal Projects
            </h3>
            <div>
                <div className="proj">
                    <h4>Algorithm Visualizer</h4>
                    <p>
                        Visualizes algorithms! 
                        <br />
                        Watch your favorite graph search and sorting algorithms in action, from Djikstra's and A*, to Merge Sort and Shell Sort!
                        <br />
                        <br/>
                        Tools Used: JavaScript, React
                    </p>
                </div>

                <div className="try_buttons">
                    <div className="try">Try It!</div>
                    <div className="repo">Repo</div>
                </div>
                
            </div>
        </div>
        
    </div>
)

export default FrontPage;