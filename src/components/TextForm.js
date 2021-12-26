import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log('click'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is Converted to UPPERCASE",'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is Converted to lowercase",'success')

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is get cleared",'success')

    }

    const handleCopyClick = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text is get Copied",'success')

    }

    const handleOnChage = (event) =>{
        // console.log('change' );
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    // text = "new text" //wrong way to change the state
    // setText("new text"); //right way to change the state

    return (
        <>
        <div className ="container" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="8" onChange = {handleOnChage} style = {{backgroundColor :props.mode === 'dark' ? 'rgb(33,37,41,0.9)' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} placeholder="Enter Text here"></textarea>
            </div>
            <button className="btn, btn-primary mx-1 my-1" onClick = {handleUpClick} > Convert to UPPERCASE </button>
            <button className='btn, btn-primary mx-1 my-1' onClick= {handleLowClick}> Convert to lowercase</button>
            <button className='btn, btn-primary mx-1 my-1' onClick= {handleClearClick}> Clear Text</button>
            <button className='btn, btn-primary mx-1 my-1' onClick= {handleCopyClick}> Copy Text</button>


            {/* mx-2 is the bottstrap css tag use to set margin at x and y axis */}

        </div>

        <div className="container my-3" style = {{color :props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length } Minutes are requried to read this text</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter Something in text box to Preview nere"}</p>
        </div>
        </>
    )
}
 