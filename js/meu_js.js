function appendToDisplay(value) {
    if (value === '*') {
      value = 'x';
    }
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var display = document.getElementById('display');
    var expression = display.value.replace(/x/g, '*');
    var result = eval(expression);
    display.value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  