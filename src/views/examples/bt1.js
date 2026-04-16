
import React, { useState } from 'react'
import Exercise from './MyComponent';
import AddComponent from './AddComponent';

// Cha- Quản lí state 
const Examples = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(4)

    const [arrJob, setArrJob] = useState([
        {id: '1', title: 'DEV', salary: 999},
        {id: '2', title: 'UI', salary: 57},
        {id: '3', title: 'UX', salary: 699},
    ]);
    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = `${firstName} ${lastName}`;
        setResult(fullName);
        alert("My name is " + fullName);
    }

    return (
       <>
       
        <div>
            <Exercise 
                name = {firstName}
                age = {age}
                arrJob = {arrJob}
            ></Exercise>  
        </div>

{/* truyền prop từ component cha -> con */}
        {/* <div>
            <AddComponent
                firstName = {firstName}
                lastName = {lastName}
                setLastName = {setLastName}
                setFirstName = {setFirstName}
                handleSubmit = {handleSubmit}
                result = {result}
                
            ></AddComponent>
        </div> */}

       

    </>
    )
}

export default Examples;