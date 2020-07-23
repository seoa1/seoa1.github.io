import React from 'react';
import Header from './header';
import FrontPage from './front_page';

export default class Display extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="view">
                <Header />
                <FrontPage />
            </div>
        )
    }
}