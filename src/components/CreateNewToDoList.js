import { Button, TextField } from "@mui/material"

const CreateNewToDoList = ({text ,setText, change}) => {
    return (
        <>
            <div>
                <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined"
                    value={text}
                    // B1 lay text trong textfied
                    onChange={(e) => {
                        setText(e.target.value)
                        console.log(e.target.value)
                    }}
                />
                <Button variant="contained" onClick={change}>Add</Button>
            </div>
        </>
    )
}

export default CreateNewToDoList;