import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    return(
        <div className="navbarbg">
            <ul>
                <Link to="/"><Button variant="primary" size="lg" block className="homebtn" >Take Me Home</Button></Link>
            </ul>
        </div>
    
    )
}