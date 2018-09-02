var sbtn = document.getElementById('q3ndbtn');
var q1 = document.getElementById('Q31');
var q2 = document.getElementById('Q32');
var q3 = document.getElementById('Q33');
var q4 = document.getElementsByClassName('Q34');
var q5 = document.getElementById('Q35');
var q6 = document.getElementById('Q36');
var q7 = document.getElementsByClassName('Q37');
var q8 = document.getElementById('stage2');
var q9 = document.getElementById('stage');
var q10 = document.getElementsByClassName('Q310');
var q11 = document.getElementsByClassName('Q311');

const maxScore = 11;

var counter = 0;
var rep = 0;
var x = 0;

q3.oninput = function() {
	document.getElementById('disVal').innerHTML = q3.value;
}

window.onclick = function(arg) {
	for (var i = q4.length - 1; i >= 0; i--) {
		if (arg.target == q4[i]) {
			if (q4[i] == q4[0] && x < 1) {
				x=1;
				counter+=1;
				q4[0].style.opacity = "0.8";
				q4[1].style.opacity = "1";
			}else{ 
				if (q4[i] == q4[1]) {
					if (x >= 1 && counter > 0) {
						counter-=1;
						x = 0;
					}
					q4[0].style.opacity = "1";
					q4[1].style.opacity = "0.8";
				}
			}
		}
	}
}

sbtn.onclick = function() {
	if (q1.value == 1) counter+=1;
	if (q2.value == 4) counter+=1;
	if (q3.value == 3) counter+=1;
	//if (q4.value == 1) counter+=1;
	if (q5.value == 12) counter+=1;
	if (q6.value == 7) counter+=1;

	   for (var i = 0; i < q7.length; i++) {
	 	if (rep < 2 && q7[i].checked == true && q7[i].value == 2) {
	 		counter+=1;
	 		rep++;
	 	}else{ counter+=0;}
	   }
	if (q8.firstElementChild.innerHTML != null && q8.firstElementChild.innerHTML == document.getElementById('answer11c').innerHTML) counter+=1;
    if (q9.firstElementChild.innerHTML != null && q9.firstElementChild.innerHTML == document.getElementById('answer12a').innerHTML) counter+=1;
	// if (q10.value == 7) counter+=1;
	for (var i = q11.length - 1; i >= 0; i--) {
		if (q11[i].checked == true) {
			if (q11[i].value == 2) counter+=1;
		}
		if (q10[i].checked == true) {
			if (q10[i].value == 3) counter+=1;
		}
	}
	document.getElementById('_score').innerHTML = "<b><u>"+counter+"</u></b>";
	counter = 0;
	x = 0;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}