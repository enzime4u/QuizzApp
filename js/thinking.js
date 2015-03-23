/*
Variables
1. counter
*/

/*
Quiz object
1. Question
2. Choices
3. correctAnswer
4. Images
5. FadeOutImage
*/
function Question(question, choice, answer){
    this.question = question;
    this.choice = choice;
    this.answer = answer; 
}

/*
questionOne = new Question('which of those can be seen from the moon' , ['choice1', 'choice2', 'choice3'],  'choice3');
console.log(questionOne);
*/

questions = [
    new Question('when was Apple Computers founded ?' , ['1976', '1977', '1975','none'],  '1976'),
    new Question('who are the founders of Apple ? ' , ['Steve Jobs', 'Steve Wozniack', 'Ronald Wayne','all three'],  'all three')
    new Question('when did Apple launched Iphone?', ['1999','2001','2005','none'],'1999');
    new Question('Where are the company HQ ?', ['New York','Washington','Cuppertino','San Francisco'],'Cuppertino');
    ];
console.log(questions);

/*
Functions
1. check function that checks what the user selects
2. 

Flow of page
1. Instructions/Tutorial
2. Click to start
3. Present question and choices
4. User picks a choice
5. Check if correct, if correct show picture fade out
6. Move on to next question

*/