import React from 'react';
import styles from './styles.css';

export function Chatlist() {
    return (
        <div className="chatlist-item">
            <img className="chatlist-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div className="chatlist-lines">
                <div className="chatlist-line">
                    <div className="chatlist-nome">Lucas</div>
                    <div className="chatlist-date">12:00</div>
                </div>
                <div className="chatlist-line">
                    <div className="chatlist-lastmsg">
                        <p>Bora programar!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

