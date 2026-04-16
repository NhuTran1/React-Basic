import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Todo from '../../components/Todo';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

// type Todo = {id: string, name: string}

const Main = () => {

    
    const [toDoList, setToDoList] = useState([
        // {id: 1, name: text}
    ]);
    const [text, setText] = useState('');

    //Buoc 2: tao objetc {id: , name: text}
    const change = () => {
        //caaus truc data can truyen vao toDoList-> muon truyen vao de thay doi UI thi m phai goi toi setToDoList
        const newItem = {
            id: toDoList.length + 1,
            name: text
        }
        console.log(newItem)

        //Bước 3: đã có text, đã có objetc cần truyền vào toDoList rồi, bây giờ thêm newItem vào toDoList
        setToDoList([...toDoList, newItem])
    }
    return (
        <>
            <div>
                <h3> This is TO Do App </h3>
            </div>
            <br></br>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"
                    value={text}
                    onChange={(e) => setText(e.target.value)} //B1: lay text
                />
                <Button variant="contained" onClick={() => change()}>Add</Button>
            </div>
            <div>
                {/* prop: thuộc tính: truyền giá trị tử cha xún con */}
                {/* <Todo name = {text}></Todo> */}
                {/* <Todo name = {"Item 2"}></Todo>
            <Todo name = {"Item 3"}></Todo>
            <Todo name = {"Item 4"}></Todo>
            <Todo name = {"Item 5"}></Todo> */}

                    {/* Buoc 4: hien thi du lieu, thay doi UI */}
                {
                    toDoList.map((value) => 
                        value.name === "" ? null : <Todo name={value.name} key = {value.id}></Todo>
                    )
                }


            </div>


        </>
    )
}

export default Main;