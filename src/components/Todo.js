import { Button, Checkbox } from "@mui/material"

const Todo = ({ name, id, onChange, checked, onClickDelete, onEdit }) => {
    return (
        <>
            <Button variant="contained" style={{ justifyContent: 'space-between' }}>{name}</Button>
            <Checkbox checked={checked} color="success" style={{ marginLeft: 'auto' }} onChange={() => onChange(id)} />
            {/* tư duy khi xóa thì ta cũng phải truyền vào id tương ứng cho nó */}
            <span className="material-icons-outlined" onClick={() => onClickDelete(id)}>X</span> 
            <span className="material-icons-outlined" style={{ marginLeft: '5px' }} onClick={() => onEdit(id)}>
                Edit
            </span>
            
        </>
    )
}

export default Todo;