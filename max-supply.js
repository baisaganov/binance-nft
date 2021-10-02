let buyerInterval = setInterval(buyer, 1);                                  // Старт функции покупки с интервалом опроса 1мс

function buyer() {                                                          // ***Окно покупки***
    if (document.querySelector('.css-bsjx8j').querySelector('button')) {    // Если есть кнопка покупки
        const block = document.querySelector('.css-bsjx8j'),                // Блок продажи
              buyBtn = block.querySelector('button'),                       // Кнопка покупки
              maxBtn = block.querySelector('.css-f2ec0a');                  // Кнопка максимального количесвта паков
        maxBtn.click();                                                     // Клик по макс. кол-ву
        console.log('Max clicked');
        buyBtn.click();                                                     // Клик по кнопке покупки
        console.log('Buy clicked');
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

