import React from 'react';
import styles from './styles.css'; 

export function Messageitem({data, user}) {
    return(
        <div className="message" style = {{justifyContent: user.id === data.author ? 'flex-end': 'flex-start'}}> 
            <div className="messageitem" style={{backgroundColor: user.id === data.author ? '#DCF8C6': '#FFF'}}>
                <div className="messagetext">{data.body}</div>
                <div className="messagedate">19:00</div>
            </div>
        </div>
    )
}