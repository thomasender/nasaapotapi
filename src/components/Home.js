import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home () {
    return(
        <div className="home">
            <Link to="/nasaphoto"><Button variant="primary" size="lg" block>See into the stars!</Button></Link>
        </div>
    )
}
