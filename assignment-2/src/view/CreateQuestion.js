import React from "react";

const CreateQuestion = ({author, title, text,date,tag, onCreate, onChange }) => (
    <div>
        <h2>Add Question</h2>
        <div>
            <label>Author: </label>
            <input value={author} 
                onChange={ e => onChange("author", e.target.value) } />
            <br />
            <label>Title:  </label>
            <input value={title} 
                onChange={ e => onChange("title", e.target.value) } />
            <br />
            <label>Text: </label>
            <input value={text} 
                onChange={ e => onChange("text", e.target.value) } />
            <br />
            <label>Date: </label>
            <input type="date" 
                value={date} 
                onChange={ e => onChange("date", e.target.value) } />
            <br />
            <label>Tag: </label>
            <input value={tag} 
                onChange={ e => onChange("tag", e.target.value) } />
            <br />
            <br />
            <button onClick={onCreate}>Create!</button>
        </div>
    </div>
);

export default CreateQuestion;