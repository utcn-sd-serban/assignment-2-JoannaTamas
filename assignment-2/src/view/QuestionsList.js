import React from "react";

const QuestionsList = ({ questions, title1 }) => (
    <div>
        <h2>{ title1 || "Questions" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th>Tag</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.author}</td>
                            <td>{question.title}</td>
                            <td>{question.text}</td>
                            <td>{question.date}</td>
                            <td>{question.tag}</td>
                          
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
       
    </div>
);

export default QuestionsList;