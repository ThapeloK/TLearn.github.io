var btn2 = document.getElementById('q2ndbtn');
var quiz1 = document.getElementsByTagName('input');
var icon = document.getElementsByClassName('icon');
var score = 0;
btn2.onclick = function() {
	for (var i = quiz1.length - 1; i >= 0; i--) {
		if (quiz1[i].type == "radio") {
			if (quiz1[i].checked == true) {
				score+=parseInt(quiz1[i].value);
				document.getElementById('final_score').innerHTML = "<b><u>"+score+"</u></b>";
			}else{
				document.getElementById('final_score').innerHTML = "<b><u>"+score+"</u></b>";
			}
		}
		if (quiz1[i].value == 1) { icon[i].src = "./IMG/correct.png"; }
	}
	score = 0;
	btn2.disabled = "true";
}
