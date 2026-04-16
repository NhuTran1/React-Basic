import Todo from "./Todo";
import Edit from "./Edit";


// khi truyen prop from father into chil, you must destrucure parameter, fucntion: {}
const ToDoList = ({listToDo, onChange, onClickDelete, onEdit, handleSave }) => {
    
    return (
        <>
        {listToDo.map((value) => {
            return (
                <>
                {/* Logic quyết định UI */}
                    {value.isEdit ? 
                        <>
                            <Edit name={value.name} id={value.id} handleSave={handleSave}/>
                            
                        </> : 
                    <Todo name={value.name} id={value.id} onChange={onChange} checked={value.checked} onClickDelete={onClickDelete} onEdit={onEdit}></Todo>
                    }
                    <br></br>

                </>
            )

        })}
        </>

        


    )
}

export default ToDoList;