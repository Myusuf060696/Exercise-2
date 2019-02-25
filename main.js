document.getElementById("calculate").onclick = function(){
  var first_number = parseInt(document.getElementById("first_number").value)
  var second_number = parseInt(document.getElementById("second_number").value)

  if(!first_number || !second_number){
    alert("at least input a number")
  }


  var operator = document.getElementById("operator")
  var operator = operator.options[operator.selectedIndex].text
  var result = 0;
  switch (operator) {
    case '+':
      result = first_number + second_number;
      break;
    case '-':
      result = first_number - second_number;
      break;
    case '*':
      result = first_number * second_number;
      break;
    case '/':
      result = first_number / second_number;
      break;
  }
  console.log(first_number, second_number, operator, result)
  document.getElementById("result").value = result
}