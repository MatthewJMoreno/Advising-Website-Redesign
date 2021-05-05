let buttons = [...document.getElementsByClassName('fa-plus-circle')]

let getPlusCircle = (index) => {
  return document.getElementsByClassName("fa-plus-circle")[index];
}

let getMinusCircle = (index) => {
  return document.getElementsByClassName("fa-minus-circle")[index];
}

for (let i = 0; i < buttons.length; i++){
  let button = buttons[i];
  button.addEventListener('click', () => {
    let plus_circle = getPlusCircle(i);
    let minus_circle = getMinusCircle(i);
    console.log("what")
    
    if (plus_circle.style.display === "" || plus_circle.style.display === 'block'){
      plus_circle.style.display = 'none';
      minus_circle.style.display = 'block';
    } else {
      minus_circle.style.display = 'none';
      plus_circle.style.display = 'block';
    }
  })
}