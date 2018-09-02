var qz1 = document.getElementsByClassName('Q1');
var myStatus = document.getElementsByClassName('valid');
window.onclick = function(e) {
	for (var i = 0 ; i < qz1.length; i++) {
		if (e.target == qz1[i]) {
			if (i < 4) { 
				if (qz1[i].value == 1) { myStatus[0].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[0].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 3 && i < 8) { 
				if (qz1[i].value == 1) { myStatus[1].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[1].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 7 && i < 12) {
				if (qz1[i].value == 1) { myStatus[2].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[2].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 11 && i < 16) {
				if (qz1[i].value == 1) { myStatus[3].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[3].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 15 && i < 20) {
				if (qz1[i].value == 1) { myStatus[4].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[4].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 19 && i < 24) {
				if (qz1[i].value == 1) { myStatus[5].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[5].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 23 && i < 28) {
				if (qz1[i].value == 1) { myStatus[6].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[6].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 27 && i < 30) {
				if (qz1[i].value == 1) { myStatus[7].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[7].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 29 && i < 34) {
				if (qz1[i].value == 1) { myStatus[8].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[8].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}else if (i > 33) {
				if (qz1[i].value == 1) { myStatus[9].innerHTML = "<span style='color: green;'><b>Correct answer!</b></span>"; }
			 	else{ myStatus[9].innerHTML = "<span style='color: red;'><b>wrong answer! , please refer to the ....</b></span>"; }	
			}
		}	
	}
}