import { render } from '@testing-library/react'
import React, { useState } from 'react'

// JSX code HTML been trong js
class MyComponent extends React.Component{

    // JSX

    /* 
    JSX-> return 1 khối
    */

    //trong react function ko can khai bao function a(){}
    //Day la 1 component, Objetc: Key:value 
    // state chính là 1 objetc : key: value 
    // Khi state thay đổi thì UI tự động render lại 
    state = {
        name : "Nhu",
        class: '23IT4'
    }
    
    render(){
        let name = "Nhu";

        return (
            <>
                <div className='first'>
                    <input value = {this.state.name} type="text"></input>
                    Hello everyone, My name is {name} <br></br>                    
                    Hello everyone, My name is {this.state.name} 
                </div>
                 
                 <div className="second">
                    abc
                 </div>
            </>
        )
    }

    
}  

const handleClickButton = () => {
    console.log("Ban click me")
    alert("Hello Ban")
}

const Exercise = ({name, age, arrJob}) => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);
    const  [flag, setFlag] = useState(false);
    const job = arrJob.map((value) => (
        <li key={value.id}>{value.title} - {value.salary} </li>
        //khi => {
        //     chung ta co the code nhiu line in block
        //     But We must remmember code return-> If not code not run  
        // }

        //Nguoc lai: => (
        //chung ta chi co the code 1 line va ko  return    
        // )
    ))

    // Muốn jsx nó render thì arrow function phải return
    // nó chỉ render UI phần code return thôi
    // state flag dùng trực tiếp được ko cần truyền vào 
    const handle = () => {
        return (
            flag && (<>
                <h3>{name} 
                    {age}                
                </h3>

                {/* display list in react -> dung map*/}
                <ul>
                    {job}
                </ul>
            </>)
        )
        
    }

    return (
        <>
            {/* // B2: Tao Input */}
            <input 
                value={text} 
                onChange={(e) => setText(e.target.value) }  
            />
            

            {/* // B3: create button for add list: when click: push text then add to list */}
            <button onClick={() => setList([...list, text])}>
                Submit
            </button>
        
                {/* B4: render list */}
            {list.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

            <div className='Click' >
                <button onClick={()=> handleClickButton()}>Click me</button>
            </div>
           
           <div>
                <button onClick={() => {
                    setFlag(!flag)
                }}>
                    {flag ? 'HIDE' : 'SHOW'}
                    
                </button>
           </div>

           <br></br>
            <div>
                {
                flag && (
                    handle()
                )
            }
            </div>
        </>
    )
}

export default Exercise;
// export default MyComponent;