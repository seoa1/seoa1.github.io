import React from 'react';
import Header from './header';
import FrontPage from './front_page';
import About from './about';
import Resume from './resume';

export default class Display extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            curr_page: 1
        }
        this.change_page = this.change_page.bind(this);
    }

    change_page(page) {
        this.setState({ curr_page: page });
    }

    render() {
        return(
            <div className="view">
                <Header change_page={this.change_page}/>
                {this.state.curr_page === 1? <FrontPage /> : null}
                {this.state.curr_page === 2? <About /> : null}
                {this.state.curr_page === 3? <Resume /> : null}
            </div>
        )
    }
}