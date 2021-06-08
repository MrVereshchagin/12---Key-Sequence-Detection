const pressed = []; // создаем пустой массив для внесения символов 
const secretCode = 'wesbos';

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    pressed.push(e.key);// вносим в конец массива название нажатой клавиши
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // ограничиваем количество искомых элементов до 6, с помощью метода массива splice (начинаем с 5, но из-за минуса с конца, вырезаем 6 элементов) 
    if(pressed.join('').includes(secretCode)) { // если эти шесть элементов содержат слово то нижеследующее
        console.log("Yeahh!");
        cornify_add();
    }
    console.log(pressed);
});