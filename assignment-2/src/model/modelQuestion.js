import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                author:"author1",
                title: "title1",
                text: "text1",
                date:" 2019-02-09",
                tag: "some tag"

               
            }, {
                author:"author2",
                title: "title2",
                text: "text2",
                date:" 2019-02-09",
                tag: "some tag"

              
            }],
            newQuestion: {
               author: "",
               title: "",
               text: "",
               date: "",
               tag: ""
            },
         
           selectedQuestionIndex: -1
        };
    }

    changeSelectedQuestionsIndex(index) {
        this.state = {
            ...this.state,
            selectedQuestionIndex: index
        };
        this.emit("change", this.state);
    }

 

    addQuestion(author,title, text,date,tag) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                author:author,
                title: title,
                text: text,
                date:date,
                tag:tag
              
            }])
        };
        this.emit("change", this.state);
    }



    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    newQuestionList(questions){
        this.state = {
            ...this.state,
            questions:questions
        };
        this.emit("change", this.state);

    }

    changeTitleFilter(value ){
        this.state = {
            ...this.state,
            searchTitle: value
            }
        
        this.emit("change", this.state);
    }
    
    

   



}



const modelQuestion = new Model();

export default modelQuestion;