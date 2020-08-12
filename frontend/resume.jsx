import React from 'react';

const Resume = () => (
    <div className="resume">
        <h5>Education</h5>
        <h3>Arizona State University<span className="date">May 2020 - Dec. 2022</span></h3>
        <h4>BS - Computer Science</h4>
        <p>GPA: 4.33 / 4.0</p>
        <p>SAT: 2390 / 2400</p>
        <h3>Vanderbilt University<span className="date">Class of 2020</span></h3>
        <h4>BA - Biochemistry</h4>
        <br/>
        <h5>Work Experience</h5>
        <h3>EpiFinder<span className="date">June 2020 - Current</span></h3>
        <h4>Software Engineering Intern</h4>
        <ul>
            <li>Developing automation system to extract information from medical papers using key word/symptom recognition to feed epilepsy diagnosis AI using Java</li>
            <li>Collaborated with CEO to mentor other interns and build comprehensive work protocols</li>
        </ul>
        <h3>Arizona State University<span className="date">Aug. 2020 - Current</span></h3>
        <h3>Teaching Assistant</h3>
        <ul>
            <li>Hosting office hours to teach students Java, object-oriented programming, and essential data structures</li>
            <li>Assisting professor during in-class activities by assisting students, providing demos</li>
            <li>Course: CSE205: Object-oriented Programming and Data Structures</li>
        </ul>
        <h3>Vanderbilt University<span className="date">Aug. 2019 - May 2020</span></h3>
        <h4>Research Assistant</h4>
        <ul>
            <li>Analyzed protein affinities to cancer-linked MAGE-B2 E3 ubiquitin ligase to search for protein function</li>
            <li>Replicated DNA by growing vectors using E. Coli culture media and PCR techniques</li>
            <li>Purified and tested proteins/DNA via SDS-PAGE, Nanodrop, and Sequence Cloner software</li>
        </ul>
        <br/>
        <h5>Personal Projects</h5>
        <h3>Pathfinding and Sorting Algorithm Visualizer<span className="date">July 2020</span></h3>
        <h3>Minesweeper Solver<span className="date">June 2020</span></h3>
        <h3>Multiplayer Real-time Chess<span className="date">July 2020</span></h3>
        <h3>Poker Hand Equity Evaluator<span className="date">Aug. 2020</span></h3>
        <br/>
        <h5>Skills</h5>
        <p><strong>Languages:</strong> JavaScript, Java, Python, Ruby, C++, HTML/CSS, SQL</p>
        <p><strong>Technologies:</strong> React, Express, Node.js, MongoDB</p>

    </div>
)

export default Resume;