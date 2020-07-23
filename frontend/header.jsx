import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 1
        }
        this.handle_click_1 = this.handle_click_1.bind(this);
        this.handle_click_2 = this.handle_click_2.bind(this);
        this.handle_click_3 = this.handle_click_3.bind(this);
    }

    handle_click_1() {
        this.setState({clicked: 1});
    }
    handle_click_2() {
        this.setState({clicked: 2});
    }
    handle_click_3() {
        this.setState({clicked: 3});
    }

    render() {
        return(
            <div className="header">
                <div id={this.state.clicked === 1 ? "clicked" : ""} onClick={this.handle_click_1}>Work</div>
                <div id={this.state.clicked === 2 ? "clicked" : ""} onClick={this.handle_click_2}>About</div>
                <div id={this.state.clicked === 3 ? "clicked" : ""} onClick={this.handle_click_3}>Resume</div>
            </div>
        )
    }
}