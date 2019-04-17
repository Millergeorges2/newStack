import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'




export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className='jumbotron text-center'>
                    <h1 className="display-3">
                    VidJot
                    </h1>
                    <p className='lead'> Jot down ideas for your next videos</p>
                    <a href='/ideas/add' className='btn btn-dark btn-lg'> Add Video Idea  </a>
                </div>
            </div>
        )
    }
}

