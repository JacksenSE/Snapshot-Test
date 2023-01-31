import React from 'react'
import Card from "react-bootstrap/Card"
import me from './me.png'

function GitHubCard() {
    return(
        <div className="card">
            <Card style={{ width: '18rem' }}>
            <Card.Img src={me} style={{width: '80%'}}></Card.Img>
            <Card.Body>
                <Card.Title>JacksenSE</Card.Title>
                    <Card.Text>
                    I am a software engineering student.
                    </Card.Text>
            </Card.Body>
           </Card>
        </div>
    )
}

export default GitHubCard