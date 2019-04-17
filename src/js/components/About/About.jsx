import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'

export default class About extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
        <div>
            <NavBar />
            <h1>About</h1>
            <p> This is a node app for future youtube videos</p>
            <p>1.0.0</p>
        </div>
        )
    }
}