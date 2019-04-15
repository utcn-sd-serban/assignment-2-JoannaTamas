import React from "react";


const FilterQuestions = ({questions,title , onFilter,onFilterButton}) => (
    <div>
      
        <h2>Filter by title</h2>
        <div>
            
            <label>Enter title: </label>
            <input value={title} 
                onChange={ e => onFilter("title", e.target.value) } />
            <br />
            <button onClick={onFilterButton}>Filter!</button>
            <br />
            <br />
            
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
        
        </div>
    </div>

    
);


export default  FilterQuestions;

