const display = document.getElementById("display");
const btnlistener = document.querySelector('.btnlistener')


btnlistener.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    // if (event.target.innerText == 'C') {
    //   clear()
    // }
    switch (event.target.innerText) {
      case 'C':
        clear()
        break;
      case '=':
        display.value = `(${eval(display.value)})`
        break;
      case '+':
        display.value += '+'
        break;
      case '-':
        display.value += '-'
        break;
      case '*':
        display.value += '*'
        break;
      case '/':
        display.value += '/'
        break;
      case '.':
        display.value += '.'
        
        break;
      case '⭠':
        display.value = display.value.slice(0, -1)
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        display.value += event.target.innerText
        break;
    
      default:
        break;
    }
  }
})

function clear() {
  display.value = ""
}