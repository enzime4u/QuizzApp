$(document).ready(function() {

            /* QUESTIONS */
            var questions = [{
                    question: " #1: when was Apple Computers founded ? ",
                    answers: ['1976', '1977', '1975', '1982'],
                    correct: 0 },

                {
                    question: " #2: who are the founders of Apple ? ",
                    answers: ['Steve Jobs', 'Steve Wozniak', 'Ronald Wayne', 'all three'],
                    correct: 3
                },

                {
                    question: " #3: when did Apple launched Iphone? ",
                    answers: ['1999', '2001', '2005', 'none'],
                    correct: 0
                },

                {
                    question: " #4: Where are the company HQ ? ",
                    answers: ['New York', 'Washinton', 'Cuppertiono', 'San Francisco'],
                    correct: 2
                },
            ]

            /* GLOBAL VARIABLES */
            var questionNum = 0;
            var numCorrect = 0;

            /* Hides questions and percent on page load */
            $('.content').hide();

            /*  Hides big button on click an displays the first question*/
            $('#begin').click(function() {
                    $('.begin').hide();
                    $('.content').fadeIn(800);
                    $('.feedback').text(" Select an answer and press Submit ");
                    question();
                })
                /* Function that loads questions and answers */
            function question() {
                console.log('questionNum = ' + questionNum);
                if (questionNum < questions.length) {
                    $('.question').text(questions[questionNum].question);
                    for (k = 0; k < questions[questionNum].answers.length; k++) {
                        $('.answers').prepend("<input type='radio' name='answer' class='radio' value=' " + k + " '>" + questions[questionNum].answers[k] + "<br>");
                    }
                } else {
                    quizEnd()
                }

            };

            /* remove radio buttons  */
            function removeAnswers() {
                $('.radio').remove();
                $('.answers').empty();
            }

            /* ends quizz and submit results  */
            function quizEnd() {
                $('.question').hide();
                $('.answerform').hide();
                $('.current-number').hide();
                $('.feedback').text(" You got  " + numCorrect + " out of " + questions.length);
            }

            /* display number corrrect and total questions  */
            function currentNumbers() {
                $('.current-number').text(" # " + (questionNum + 1) + "/" + questions.length + " | Correct " + numCorrect + "/" + questionNum);
            };


            /*submit button click function*/
            $('#submitbutton').click(function() {
                var userAnswer = $('input[type=radio]:checked').val();
                var correctAnswer = questions[questionNum].correct;
                //checks the answer and moves to the next question
                if (userAnswer == null ) {
                    $('.feedback').text('You need to choose something...').css('backgroundColor','pink').css('maxWidth','300px').css('padding','10px');
                } else if (userAnswer == correctAnswer) {
                    $('.feedback').text('Correct !').css('backgroundColor','green').css('maxWidth','300px').css('padding','10px').css('color','white');
                    removeAnswers()
                    questionNum++
                    numCorrect++
                    question()
                } else {
                    $('.feedback').text('Wrong, the correct answer is ' + questions[questionNum].answers[correctAnswer]).css('backgroundColor','yellow').css('maxWidth','300px').css('padding','10px');
                    removeAnswers()
                    questionNum++
                    // currentNumbers()
                    question()
                };
                console.log('submit clicked');
                console.log('userAnswer is ' +userAnswer);
                return false;   
            })
        });