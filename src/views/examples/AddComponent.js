import React, { useState } from 'react'

const AddComponent = ({
    firstName,
    lastName,
    setFirstName,
    setLastName,
    handleSubmit,
    result
}) => {
   
    
    return(
        <>
         <form onSubmit={handleSubmit}>
           
            <label htmlFor="fname">First name:</label><br/>
            <input 
            type="text" 
            value={firstName}
            onChange={(e) =>{ 
                console.log('hello', e.target.value)
                const value = e.target.value
                setFirstName(value)}
            }
            />
            <br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input 
            type="text"  
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
                console.log('render', e.target.value)
            }}
            />
            <br/>
            {/* <input 
                type="button" 
                value="Submit"
                onClick={() => {
                    const fullName = firstName + lastName;
                    setResult(fullName)
                    
                    alert('My name is ' + fullName)
                }}
            /> */}

            <input type='submit' ></input>

           {result && <h3>{result}</h3>}
              
        </form>
        </>
    )
}

export default AddComponent;