var equals = "";
var queue = "";
var heap = "";
var op = "";
var toggled = false;
var length = 11;

function toggle() {
  if(!toggled) {
    // Add class
    document.getElementById("calculator").className += " flipped";
    toggled = true;
  }
  else {
    // Remove class
    document.getElementById("calculator").className = document.getElementById("calculator").className.replace( /(?:^|\s)flipped(?!\S)/g , '' );
    toggled = false;
  }
}

function operator() {
  equals = "";

  if(op == "+") {
    equals = parseFloat(heap) + parseFloat(queue);
  }
  else if(op == "-")
  {
    equals = parseFloat(heap) - parseFloat(queue);
  }
  else if(op == "*")
  {
    equals = parseFloat(heap) * parseFloat(queue);
  }
  else if(op == "/")
  {
    equals = parseFloat(heap) / parseFloat(queue);
  }
  else if(op == "pow")
  {
    equals = Math.pow(parseFloat(heap), parseFloat(queue));
  }
  else
  {
    equals = queue;
  }
}

function calculate(button) {
  queue = document.getElementById('display').innerHTML;

  if(queue == "0" && heap == "") {
    document.getElementById('display').innerHTML = "";
    queue = "";
  }

  if(button == "clear") {
    document.getElementById('display').innerHTML = "0";
    heap = "";
  }
  else if(button == "clearEntry") {
    document.getElementById('display').innerHTML = "";
  }
  else if(button == "plusminus" || button == "pi" || button == "e") {
    if(queue == "") { 
      queue = 0; 
    }

    if(button == "plusminus") {
      equals = parseFloat(queue) * -1;
    }
    else if(button == "pi") {
      equals = parseFloat(Math.PI).toString().substring(0,length);
    }
    else if(button == "e") {
      equals = parseFloat(Math.E).toString().substring(0,length);
    }
    document.getElementById('display').innerHTML = equals;
  }
  else if(button == "sqrt") {
    if(queue == "") { 
      queue = 0; 
    }

    operator();
    op = "";
    equals = Math.sqrt(parseFloat(equals));

    if(equals.toString() == "NaN") { 
      document.getElementById('display').innerHTML = "Error"; 
    }
    else if(equals != "") {
      heap = parseFloat(equals).toString();

      if(heap.length > length) {
        document.getElementById('display').innerHTML = equals.toPrecision(5);
      }
      else {
        document.getElementById('display').innerHTML = heap;
      }    
    }
  }
  else if(button == "+" || button == "-" || button == "*" || button == "/" || button == "pow") {
    if(queue == "") { 
      queue = 0; 
    }

    operator();
    if(equals.toString() == "NaN") { 
      document.getElementById('display').innerHTML = "Error"; 
    }
    else if(equals != "") {
      heap = equals;
    }
    op = button;
    document.getElementById('display').innerHTML = "";
  }
  else if(button == "=") {
    if(queue == "") { 
      queue = 0; 
    }

    operator();
    if(equals.toString() == "NaN") { 
      document.getElementById('display').innerHTML = "Error"; 
    }
    else if(equals != "") {
      op = "";
      heap = parseFloat(equals).toString();

      if(heap.length > length) {
        document.getElementById('display').innerHTML = equals.toPrecision(5);
      }
      else {
        document.getElementById('display').innerHTML = heap;
      }    
    }
  }
  else if(button == "backspace") {
    var last = queue.length - 1;
    if(last < 0) {
      last = 0;
    }
    document.getElementById('display').innerHTML = queue.substring(0,last);    
  }  
  else {            
    if(queue.length == length) {
      alert("Max digits " + length);
    }
    else {
      if(button == "." && queue.indexOf(".") !== -1) {
        alert("Invalid decimal");
      }
      else {
        document.getElementById('display').innerHTML = queue + button;
      }
    }
  }
};
