
class quiz {
	question;
	answer1;
	answer2;
	answer3;
	correctAnswer;

	constructor (a,b,c,d,e) {
		this.question=a;
		this.answer1=b;
		this.answer2=c;
		this.answer3=d;
		this.correctAnswer=e;
	}
populate(){
	document.getElementById('questionBox').innerHTML = this.question
	document.getElementById('answerBox1').innerHTML = this.answer1
	document.getElementById('answerBox2').innerHTML = this.answer2
	document.getElementById('answerBox3').innerHTML = this.answer3
	document.getElementById('answerBox4').innerHTML = this.correctAnswer
}
	

}

document.getElementById('questionBox').innerHTML

var question1 = new quiz("What is the correct Answer","This is Button A","This is Button B","This is Button C", "This is Button D")


console.table(question1);

question1.populate();



