import React, { useState, useEffect } from 'react';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import { Chatlist } from './components/Chatlist';
import { Chatintro } from './components/Chatintro';
import { Chatwindow } from './components/Chatwindow';

import './App.css';

export default function App(){

    const[chatlist, setChatlist] = useState([
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 2, title: 'Fulaninho de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 3, title: 'Ciclano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 4, title: 'Beltrano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'}
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 1234,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        name: 'Lucas Eduardo'
    });

    return(
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src={user.avatar} alt="Avatar" />
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
                            data={item}
                            active = {activeChat.chatId === chatlist[key].chatId}
                            onClick={() => setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>
            </div>

            <div className="contentarea">
                {activeChat.chatId !== undefined &&
                    <Chatwindow user={user}/>
                }
                {activeChat.chatId === undefined &&
                    <Chatintro/>
                }
                
            </div>
        </div>
    )
}