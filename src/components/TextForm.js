import React, { useState } from 'react';

export default function MyComponent(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length!==0){
            props.showAlert("Text has been Capitalized!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }
    };

    const handleOnClick = (event) => {
        setText(event.target.value);
    };

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        console.log(text.length);
        
        if(text.length!==0){
            props.showAlert("Text has been changed to Lowercase!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const copyText=()=>{
        var text=document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        if(text.length!==0){
            props.showAlert("Text has been copied!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

    }
    const clearText=()=>{
        setText("");
        if(text.length!==0){
            props.showAlert("Text has been cleared!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

    }
    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        setText(newtext);
        if(text.length!==0){
            props.showAlert("Text has been Reversed!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

      }; 
      const handleToggleCaseClick = () => {
        let words = text.split(" ");
        let newText = words
          .map((word) => {
            let newWord = "";
            for (let i = 0; i < word.length; i++) {
              let char = word.charAt(i);
              if (char >= "A" && char <= "Z") {
                char = char.toLowerCase();
              } else if (char >= "a" && char <= "z") {
                char = char.toUpperCase();
              }
              newWord += char;
            }
    
            return newWord;
          })
          .join(" ");
    
        setText(newText);
        if(text.length!==0){
            props.showAlert("Text has been modified!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

      };
    
      const handleSentenceCaseClick = () => {
        let lowerCase = text.toLowerCase();
        let regex = /(?:^|[.!?]\s+)(\w+)/g; // Adjusted regex
        let sentences = lowerCase.match(regex);
        let newText = sentences && sentences.length > 0 ? sentences
            .map((sentence) => {
                return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
                    ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
                    : sentence);
            })
            .join("") : text;
    
        setText(newText);
        if(text.length!==0){
            props.showAlert("Text has been modified!", "success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        };
    };
    
    
    const remSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        if(text.length!==0){
            props.showAlert("All extra spaces have been removed!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

    }
    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        setText(newText);
        if(text.length!==0){
            props.showAlert("Each word has been Capitalized!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

      };

const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
        if(text.length!==0){
            props.showAlert("Text has been imported!","success")
        }
        else{
            props.showAlert("Enter some text to modify!", "warning")
        }

    }


    return (
        <>
        <div>
            <div className="my-3">
                <h4 style={{color:props.mode==='light'?'black':'white'}}>{props.heading} </h4>
                <textarea
                    type="text"
                    className="form-control"
                    onChange={handleOnClick}
                    value={text}
                    style={{backgroundColor:props.mode==='dark'?'black':'white' ,color:props.mode==='light'?'black':'white'}}
                    id="myBox" 
                    rows="8"
                ></textarea>
            </div>
           
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleUpClick}>
                Convert To Uppercase
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleLowerClick}>
                Convert To Lowercase
            </button>
           
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleinverseclick}>
                Inverse
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleToggleCaseClick}>
                Toggle Case
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleSentenceCaseClick}>
                Sentence Case
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={handleCapitalizeWordClick}>
                Capitalize each word
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={remSpace}>
                Remove Extra Space
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={copyText}>
                Copy
            </button>
            <button className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} onClick={clearText}>
                Clear
            </button>
            <input type="file" className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-3`} accept="text/plain" onChange = {readTxt}/>
                  
      <button type="submit" id="toggle" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container mb-5">
        <h4 style={{color:props.mode==='light'?'black':'white'}}>Your text summary:</h4>
        <p style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    {text.trim() === "" ? "0 words" : `${text.split(" ").length} words`} 
    {" "}
    {text.length} characters 
    {" "}
    {text === "" ? "0 sentences" : `${text.split(".").length - 1} sentences`}
</p>

        <p style={{color:props.mode==='light'?'black':'white'}}>{text.trim() === "" ? "0" :0.008 * text.split(" ").length} Minutes read</p>
        <h4 style={{color:props.mode==='light'?'black':'white'}}>Preview:</h4>
        <div style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter something in the above textbox to preview it here"}</div>
        </div>
        </>
    );
}
