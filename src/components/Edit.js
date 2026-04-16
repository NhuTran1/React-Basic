import { Button, TextField } from "@mui/material"
import { useState } from "react";

const Edit = ({name, handleSave, id}) => {
    //state editText
    const [editText, setEditText] = useState(name)

    return (
        <>
            <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" value={editText} onChange={(e) => setEditText(e.target.value)} />
            <Button variant="contained" onClick={()=>handleSave(id, editText)}>Save</Button>
        </>
    )
}

export default Edit;