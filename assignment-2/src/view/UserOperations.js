import React from "react";

const UserOperations = ({title1, onAddQuestion, onListQuestions,onFilterQuestions}) => (
    <div>
        <h1>{  "You are logged in!" }</h1>
        <br />
        <br />
        <h2>{ title1 || "Choose Operation" }</h2>
       
        <button onClick={onAddQuestion}>Add new Question</button> 
        <br />
        <br />
        <button onClick={onListQuestions}>Display Questions</button>
        <br />
        <br />
        <button onClick={onFilterQuestions}>Filter Questions</button>
    </div>
);

export default UserOperations;