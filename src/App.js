import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { Chatlist } from './components/Chatlist';
import './App.css';

export default function App(){

    const[chatlist, setChatlist] = useState([{}, {}, {}, {}]);

    return(
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    <div className="header-button">
                        <div className="header-btn">
                            <DonutLargeIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="header-btn">
                            <ChatIcon style={{color: '#919191'}}/>
                        </div>
                        <div className="header-btn">
                            <MoreVertIcon style={{color: '#919191'}}/>
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search-input">
                    <SearchIcon fontSize="small" style={{color: '#919191'}}/>
                    <input className="input-s" type="search" placeholder="Começar uma nova conversa"/>
                    </div>
                </div>

                <div className="chatlist">
                    {chatlist.map((item, key) => (
                        <Chatlist
                            key={key}
                        />
                    ))}
                </div>
            </div>

            <div className="contentarea">
                ...
            </div>
        </div>
    )
}