import React, { useState } from 'react';

const AddNote = ({ handleAddNote, handleDeleteNote }) => {
    const [noteText, setNoteText] = useState("");
    const limitTextSize = 200;

    const handleTextChange = (e) => {
        if (limitTextSize - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }
    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="8"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleTextChange}
            >

            </textarea>
            <div className="note-footer">
                <small>{limitTextSize - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;