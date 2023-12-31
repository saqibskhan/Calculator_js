let display = document.getElementById('display');

let buttons  = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'DEL':
                display.innerHTML = '';
                break;
                case 'AC':
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0, -1)
                    }
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error!';
                    }
                   
                    break;
            default:
                display.innerHTML += e.target.innerHTML;
        }
    });
});