let buyerInterval = setInterval(buyer, 1),                                  // Старт функции покупки с интервалом опроса 1мс
    packsValaue = +prompt('Введите кол-во паков для покупки', 10);          // Окно ввода кол-ва паков для покупки


function buyer() {                                                          // ***Окно покупки***
    if (document.querySelector('.css-bsjx8j').querySelector('button')) {    // Если есть кнопка покупки
        const block = document.querySelector('.css-bsjx8j'),                // Блок продажи
              buyBtn = block.querySelector('button'),                       // Кнопка покупки
              count = document.querySelector('input');                      // Поле ввода количества паков
        count.value = +packsValaue;                                         // КОЛИЧЕСТВО ПАКОВ
        buyBtn.click();                                                     // Клик по кнопке покупки
        clearInterval(buyerInterval);                                       // Остановка интервала
        setInterval(apply, 1);                                              // Старт функции подтверждения с интервалом опроса 1мс
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

