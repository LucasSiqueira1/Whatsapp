import React, { useState } from 'react';
import styles from './styles.css';
import {Messageitem} from '../Messageitem';
import Picker from 'emoji-picker-react';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export function Chatwindow({user}){

    let rec = null;
    let speechrec = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(speechrec != undefined){
        rec = new speechrec();
    }
    
    const [emojiOpen, setEmojiopen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([
        {author: 123, body: 'lorem oakcjioscjmscio'},
        {author: 123, body: 'lorem oakcjioscjmscio'},
        {author: 1234, body: 'lorem oakcjioscjmscio'}
    ]);

    const handleEmojiClick =(e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }
    const handleOpenEmoji =() => {
        setEmojiopen(true);
        
    }

    const handleCloseEmoji = () => {
        setEmojiopen(false);
    }
    
    const handleMicClick = () => {
        if(rec !== null) {
            rec.onstart = () => {
                setListening(true)
            }
            rec.onend = () => {
                setListening(false);
            }
            rec.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
            rec.start();
        }
    }

    const handleSendClick = () => {

    }

    return (
        <div className="chatwindow">
            <div className="chatwindow-header">
                <div className="chatwindow-header-info">
                    <img className="chatwindow-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>|
                    <div className="chatwindow-name">Lucas Eduardo</div>
                </div>

                <div className="chatwindow--headerbuttons">
                    <div className="chatwindow-btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatwindow-btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatwindow-btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
            <div className="chatwindow-body">
                {list.map((item,key)=>(
                    <Messageitem key={key} data={item} user={user}/>
                ))}
            </div>
            <div className="chatwindow-emojiarea" style= {{height: emojiOpen ? '200px': '0px'}} >
                <Picker disableSearchBar disableSkinTonePicker pickerStyle={{ width: '100%' }} onEmojiClick={ handleEmojiClick} />
            </div>

            <div className="chatwindow-footer">
                <div className="chatwindow-pre">
                    <div className="chatwindow-btn" onClick={handleCloseEmoji}>
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="chatwindow-btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688': '#919191' }}/>
                    </div>
                </div>

                <div className="chatwindow-inputarea">
                    <input className="chatwindow-input" type="text" placeholder="Digite uma mensagem" value={text} onChange={e => setText(e.target.value)}/>
                </div>

                <div className="chatwindow-pos">
                    {text == '' &&
                        <div onClick = {handleMicClick} className="chatwindow-btn">
                            <MicIcon style={{color: listening? '#126ECE': '#919191'}}/>
                        </div>
                    }
                    {text !== '' &&
                        <div onClick = {handleSendClick} className="chatwindow-btn">
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}