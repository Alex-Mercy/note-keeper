import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

function CreateArea(props) {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    })

    const [isZoomed, setZoomed] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputText(() => {
            return {
                ...inputText,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.addNote(inputText)
        setInputText({
            title: "",
            content: ""
        })
    }

    const expand = () => {
        setZoomed(true);
    }

    return (
        <div>
            <form className="create-note">
                {isZoomed && <input name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    value={inputText.title} />}

                <textarea name="content" onChange={handleChange} placeholder="Take a note..."
                    value={inputText.content} onFocus={expand}
                    rows={isZoomed ? 3 : 1} />
                <Zoom in={isZoomed}>
                    <Fab onClick={handleClick}><NoteAddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
