import React from 'react';

const FrontPage = () => (
    <div>
        <div className="greeting">
            <h1>Hi, I'm Andrew.</h1>
            <h2>I'm currently studying CS at <span style={{fontSize: "25px", color: "#B22222"}}>ASU</span>, and I have a degree in Biochemistry from <span style={{fontSize: "25px", color:"#d4af37"}}>Vanderbilt</span>.
                <br/>
                Welcome to my website!
            </h2>
        </div>
        <div className="ext_links">
            <img onClick={() => window.open("https://github.com/seoa1")} src="./images/github-logo.png"/>
            <img onClick={() => window.open("https://www.linkedin.com/in/andrew-seo-16319a1a5/")} src="./images/linkedin.png"/>
        </div>
        <div className="proj_back">
            <div className="projects">
                <h3 className="proj_head">
                    Personal Projects
                </h3>
                <div className="proj">
                    <h4 className="proj_name">Algorithm Visualizer</h4>
                    <p>
                        Watch your favorite graph search and sorting algorithms in action, from Djikstra's and A*, to Merge Sort and Shell Sort!
                        <br />
                        <br/>
                        Tools Used: JavaScript, React
                    </p>
                </div>

                <div className="try_buttons">
                    <div className="try" onClick={() => window.open("https://seoa1.github.io/AlgoVisualizer/")}>Try It!</div>
                    <div className="repo" onClick={() => window.open("https://github.com/seoa1/AlgoVisualizer")}>Repo</div>
                </div>

                <div className="proj">
                    <h4 className="proj_name">Minesweeper Solver</h4>
                    <p>
                        Play Minesweeper in your browser, or let your browser play it for you! Uses advanced pattern recognition, edge tracking, and probability calculation
                         algorithms to get the highest chance of winning.
                        <br />
                        <br/>
                        Tools Used: JavaScript, React
                    </p>
                </div>

                <div className="try_buttons">
                    <div className="try" onClick={() => window.open("https://seoa1.github.io/Minesweeper-Solver/")}>Try It!</div>
                    <div className="repo" onClick={() => window.open("https://github.com/seoa1/Minesweeper-Solver")}>Repo</div>
                </div>
                
            </div>
        </div>

        
    </div>
)

export default FrontPage;