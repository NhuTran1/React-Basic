import { Button, Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import Todo from "../../components/Todo";
import CreateNewToDoList from "../../components/CreateNewToDoList";
import ToDoList from "../../components/ToDoList";

const ToDoApp = () => {

    // 2 activation need do: display list to do app and when you write in textField -> change content in button
    const [listToDo, setListToDo] = useState([
        // {
        //     id: 1, name: 'Item 1', checked: false
        // },
        // {
        //     id: 2, name: 'Item 2', checked: false
        // }
    ])

    // aim: get text when user write in textfiel to update UI textfied and assignment value text in list button
    const [text, setText] = useState('');

    //create id auto increase
    const [idAuto, setIdAuto] = useState(0);

    const change = () => {
        // B2: create varialbe with type Object to save data as Objetc
        //id: leng+1: ko ổn 
        const newItem = { id: idAuto, name: text, checked: false, isEdit: false };
        console.log(newItem)
        //B3: right now, I having data text, so I copy with list created and list new => want update UI, You must get data form variable text to update setToDoList
        setListToDo([newItem, ...listToDo])
        setText("")
        setIdAuto(idAuto + 1);

    }

    // Tư duy tạo thêm state checked sai rồi, vì mỗi object trong ToDoList nó riêng lẽ ko liên quan đến nhau
    // const [checked, setChecked] = useState(false)
    // const itemChecked = []
    // const onChange = ({id}) => {
    //     // b1: tao map
    //     listToDo.map((value) => {
    //         if(value.id === id) {
    //             //B2: tao item moi, doi checked = true
    //             itemChecked =  [...value, !value.checked];
    //             return itemChecked;

    //         }

    //     })
    //     //b3: setListToDo de cap nhat lai state
    //     setListToDo(itemChecked)
    // }

    const onChange = (id) => {
        //B1:duyet qua map de tim id tuong ung
        const itemChecked = listToDo.map((value) => {
            if (value.id === id) {
                //B2: tao item moi
                return {
                    ...value, checked: !value.checked
                }
            }
            return value;
            //setToDo dat trong map sai-> map chay n lan thi setState N lan
            // setListToDo(itemChecked)
        })
        //setListToDo o ngoai map vi sau khi no tim ra id tương ứng-> tạo objetc mới{}, sau đó mới thay dổi state-> UI
        setListToDo(itemChecked)
    }

    // const conditionDelete = (e, id) => {
    //     // khi id trùng với id cần xóa thì loại bỏ-> false
    //     if (e === id){
    //         return false;
    //     }
    //     return true;
    // }

    const onClickDelete = (id) => {
        //muc tieu tạo arr mới ko chứa ptu cần xóa để setListToDo
        const newListAfterDelete = listToDo.filter((value) => {
            //giu lại những item ko can xoa 
            // if (value.id !== id) return true;
            // return false; 
            // viet ngan gon
            return value.id !== id;
        })
        setListToDo(newListAfterDelete);
    }

    //edit
    const onEdit = (id) => {

        //tao ra 1 item moi chua noi dung cua item da thay doi
        const newItemEdit = listToDo.map((value) =>{
            //B1: tim id tuong ung can edit
            if (value.id === id) {
                return {
                    ...value, isEdit: true
                }
                
            }
            return {...value, isEdit: false};
        })
        setListToDo(newItemEdit)
    }

    const handleSave = (id, editText) => {
        const newList = listToDo.map((value) => {
            //Update item 
            if (value.id === id) {
                return {
                    ...value, name: editText, isEdit: false
                }
            }
            return value;
        })
        setListToDo(newList);
    }

    return (
        <>
            <h3>This is TO DO APP</h3><br></br>
            <div style={{ display: 'flex' }}>
                <CreateNewToDoList text={text} setText={setText} change={change}></CreateNewToDoList>
            </div>
            <div>
                {/* {
                    listToDo.map(value => {
                        return (
                            <>
                                <Todo name={value.name} key={value.id}></Todo>
                                <br></br>
                               
                            </>
                        )

                    })
                } */}
                <ToDoList listToDo={listToDo} onChange={onChange} onClickDelete={onClickDelete} onEdit={onEdit} handleSave={handleSave}></ToDoList>

            </div>
        </>
    )
}

export default ToDoApp;