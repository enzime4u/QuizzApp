$(document).ready(function() {
        $('#start').click(function() {
            $('.int_text,.above_btn,#start').css('display', 'none');
            $('.work_area,.question,.user_feedback').css('display', 'block');
        });
        generateQuestions();
        generateChoices();
        submitA();
        evaluate();

    }) //end of document ready.

var currentQuestion = 0;
var questions = new Array();

function Question(currentQuestion, choice, answer) {
    this.currentQuestion = currentQuestion;
    this.choice = choice;
    this.answer = answer;
}

questions[0] = new Question('#1: when was Apple Computers founded ?', ['1976', '1977', '1975', 'none of those'], 0);
questions[1] = new Question('#2: who are the founders of Apple ? ', ['Steve Jobs', 'Steve Wozniack', 'Ronald Wayne', 'all three'], 3);
questions[2] = new Question('#3: when did Apple launched Iphone?', ['1999', '2001', '2005', 'none'], 0);
questions[3] = new Question('#4: Where are the company HQ ?', ['New York', 'Washington', 'Cuppertino', 'San Francisco'], 2);



//write question to the page 
function generateQuestions() {
    var q = questions[currentQuestion].currentQuestion;
    $('.question_title').append('<h4>' + q + '</h4>').fadeIn('slow');
    console.log(q);
}

function generateChoices() {
    var write = "";
    var a = questions[currentQuestion].choice;
    for (var k = 0; k < a.length; k++) {
        write += "<li> <input type='radio' name='radio' class='option' value=" + (k) + ">" + a[k] + "</li>";
    }
    $('.answers').append(write);
    console.log(write);
}

// radio buttons being clicked
function submitA() {
    $('.option').click(function() {
        if ($("input[type='radio' ] [name='radio']").is(':checked')) {
            evaluate();
            $('.option').attr('disabled', true);
            console.log('hello');
        }
    });
}

// evaluate Answer 

function evaluate() {
    var selected = $(" input[type='radio'] [name='radio']:checked ");
    if (selected.length >= 0) {
        selectedAnswer = selected.val();
    }
    if (selectedAnswer == questions[currentQuestion].correct) {
        $('.correct').append("<p>Correct!</p>");
        $('.next').append("<p>Next</p>");
        nextQuestion();
        currentQuestion++;
    } else {
        $('.incorrect').append("<p>Incorrect.</p>");
        $('.next').append("<p>Next</p>");
        nextQuestion();
        currentQuestion++;
    }
}

function nextQuestion() {
    $('.next').click(function() {
        $('h4').remove();
        $('li').remove();
        $('.user_feedback p').remove();

    if (currentQuestion >= 4) {
            complete();
            restart();
            return;
    } 

    else {
            generateQuestions();
            generateChoices();
            submitA();
        }

    });
}

function playerScore() {

}

function questionNumber() {

}

function complete() {

}