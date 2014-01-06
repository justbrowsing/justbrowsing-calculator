function keyboard(keyunicode) {
	if (keyunicode > "47" && keyunicode < "58") { 
		var digit = keyunicode - 48;
		calculate(digit); 
	}
	else if (keyunicode == "46") {
		calculate('.');
	}
	else if (keyunicode == "8") {
		calculate('backspace');
	}
	else if (keyunicode == "43") {
		calculate('+');
	}
	else if (keyunicode == "45") {
		calculate('-');
	}
	else if (keyunicode == "42" || keyunicode == "120") {
		calculate('*');
	}
	else if (keyunicode == "47" || keyunicode == "92") {
		calculate('/');
	}
	else if (keyunicode == "61" || keyunicode == "13") {
		calculate('=');
	}
	else if (keyunicode == "94") {
		calculate('pow');
	}
	else if (keyunicode == "27") {
		calculate('clear');
	}
	else if (keyunicode == "96" || keyunicode == "126") {
		toggle();
	}
}

function keypress(keyup) {
	if (keyup == "8") {
		calculate('backspace');
	}
	else if (keyup == "27") {
		calculate('clear');
	}
}
