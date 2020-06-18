


function generateQuiz(questions, quizontainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];

        var answers;

        // for each question
        for (let i = 0; i < questions.length; i++) {
            
            answers - [];

            for(letter in questions[i] .answers) (

                answers.push {
                    `<label><input type=\\"radio` name="question' +i+ "value="'+letter+'">
                    + letter + ':'
                    = questions[i].answer[letter]
                    = '</label>'
                };
            )
            
        }
        // add this question and its answers to the output
        output.push()
            '<div class="question">' + questions[i].question + '</div>'
        );

    }
    // combine output list into one string of html

    quizContainer.innerHTML = output.join('');



    function showResults(questions, quizContainer, resultsContainer){
        //collect answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answer');
        // keep track of user's answer
        var userAnswer = '';
        var numCorrect = 0;
        // for each question
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainer[i].querySelector('input[name = question' + i +']:checked')||{}).value

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number correct
                numCorrect++;

                // color the answer green
                answerContainers[i].style.color = 'lightgreen';
            }

            // if answer wrong or blank
            else (
                // color the answers red
                answerContainers[i].style.color = 'red';
            )
        }

        // show the number of correct answers out of total
        resultsContainer.innerHTML = numCorrect = 'out of' + questions.length;
    }

    //show the question

    showQuestions(questions, quizContainer);

    // when user clicks submit, show results

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer)
        // on submit, show results
        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    }
}

var myQuestions = [
    {
        question: "What is HTML?",
        answers: (
            a: 'HyperText Markup Lanuage',
            b: 'HyperType Marking Linguistics',
            c: 'Same as CSS',

        ),
        correctAnswer: 'a'
    },

    {
        question: "What is CSS?",
        answers: (
            a: 'HTML',
            b: 'Cascading Style System',
            c: 'JavaScript',

        ),
        correctAnswer: 'b'
    },

    {
        question: "What is used to add styles?",
        answers: (
            a: 'JQuery',
            b: 'HTML',
            c: 'CSS',

        ),
        correctAnswer: 'c'
    },

    {
        question: "What is the Repository that is used in coding?",
        answers: (
            a: 'GitHub',
            b: 'HubGit',
            c: 'Gitty',

        ),
        correctAnswer: 'a'
    },

    {
        question: "What function is used to make a list?",
        answers: (
            a: 'line',
            b: 'array',
            c: 'console.log',

        ),
        correctAnswer: 'b'
    },

]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
