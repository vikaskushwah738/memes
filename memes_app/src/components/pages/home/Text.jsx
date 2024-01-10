import React, { useState } from 'react'
import Draggable from "react-draggable";
function Text() {
    const [editMode, setEditMode] = useState(false);
    const [val, setVall] = useState("Duble Click to Edit")
    return (
        <div style={{position:"absolute"}}>
        <Draggable >
            {
                editMode ? (<input onDoubleClick={e => setEditMode(false)} 
                value={val} onChange={e => setVall(e.target.value)} />)
                    : (<h4 onDoubleClick={e => setEditMode(true)}>{val}</h4>
            )}
        </Draggable>
        </div>
  );
}
export default Text