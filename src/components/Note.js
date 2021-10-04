import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
const Note = () => {
    return (
        <div className="note">
            <span>Hello! This is our first note! Hurray!</span>
            <div className="note-footer">
                <small>09/10/2021</small>
                <MdDeleteForever className="delete-icon" size="1.3rem" />
            </div>
        </div>
    );
};

export default Note;