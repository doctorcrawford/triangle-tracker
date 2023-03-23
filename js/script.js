function triangleGetter(event) {
  event.preventDefault();
  const aSide = parseFloat(document.querySelector('#sideA').value);
  const bSide = parseFloat(document.querySelector('#sideB').value);
  const cSide = parseFloat(document.querySelector('#sideC').value);
  
  function displayAnswer(answer) {
    document.getElementById('display').innerHTML = answer;
  }
// let result = document.getElementById('display'); another option
  
  if(aSide === bSide && aSide === cSide) {
    displayAnswer('You have an equilateral triangle!');
  } else if(aSide + bSide <= cSide || bSide + cSide <= aSide || aSide + cSide <= bSide) {
    displayAnswer('This ain\'t no triangle, my friend.');
  } else if(aSide === bSide || bSide === cSide || aSide === cSide) {
    displayAnswer('Isosceles is your game, homie.');
  } else if(aSide != bSide && bSide != cSide) {
    displayAnswer('Scalene allllll the way!!');
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("triangle-sides");
  form.addEventListener('submit', triangleGetter);
});