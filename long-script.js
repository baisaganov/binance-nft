let packsValue = +prompt('Введите кол-во паков для покупки', 10),           // Окно ввода кол-ва паков для покупки
    buyerInterval = setInterval(buyer, 1),                                  // Старт функции покупки с интервалом опроса 1мс
    switcher = true,
    countInterval;
 

function buyer() {                                                          // ***Окно покупки***
    if (document.querySelector('.css-bsjx8j').querySelector('button')) {    // Если есть кнопка покупки
        const block = document.querySelector('.css-bsjx8j'),                // Блок продажи
              buyBtn = block.querySelector('button');                       // Кнопка покупки
        countInterval = setInterval(clicker, 1);                            // Имитация нажатия кнопки +
        if (switcher == false) {                                            
            buyBtn.click();                                                 // Клик по кнопке покупки
            clearInterval(buyerInterval);                                   // Остановка интервала
            setInterval(apply, 1);                                          // Старт функции подтверждения с интервалом опроса 1мс
        }
    } else {
        console.log('waiting selling time');
    }
}


function apply() {                                                          // ***Окно подтверждения***
    if (document.querySelector('.css-z9ynqk')) {                            // Если появилось окошко подтверждения 
        const divider = document.querySelector('.css-z9ynqk'),              // Блок подтверждения
              applyBtn = divider.querySelector('button');                   // Кнопка подтверждения
        applyBtn.click();                                                   // Клик по кнопке подтверждения
    } else {
        console.log('waiting apply divider');
    }
    
}

function clicker() {                                                        // ***Работа с input***
    if (packsValue-1 != 0) {                                                
        document.querySelector('.css-1my7wuf').nextElementSibling.click();  // Клик по кнопке +
        packsValue -= 1;
    } else {                                 
        switcher = false;
        clearInterval(countInterval);
    }
}