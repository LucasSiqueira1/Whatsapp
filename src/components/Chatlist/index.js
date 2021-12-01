import React from 'react';
import styles from './styles.css';

export function Chatlist({onClick, active, data}) {
    return (
        <div className={`chatlist-item ${active? 'active' : ''}`} onClick= {onClick} >
            <img className="chatlist-avatar" src={data.avatar} alt="" />
            <div className="chatlist-lines">
                <div className="chatlist-line">
                    <div className="chatlist-nome">{data.title}</div>
                    <div className="chatlist-date">12:00</div>
                </div>
                <div className="chatlist-line">
                    <div className="chatlist-lastmsg">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus nam doloribus illum velit asperiores dicta dignissimos blanditiis quod adipisci reiciendis consequuntur ab quae, nemo voluptatum sapiente, ipsam ipsum ipsa?</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

