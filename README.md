# Clicker bot for buying NTF packs on binance
_Кликер бот для покупки НФТ паков на бинансе ([на русском ниже](https://github.com/baisaganov/binance-nft/blob/main/README.md#%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B0-%D0%B8-%D1%81%D0%B0%D0%BC-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82))_

TG: https://t.me/aliw39
Donate: 
*BTC - 18y7UP8P3Dd9kz7eJtZaLvRif22swyK9oF .
*BNB/ETH/Polygon networks - 0xa8075e5bb773572891eE6Ee3091c9D1F4177465B .
*XRP - rDgRhbCPTnGutuGzqmJjFadTWfEzvfxEj6 .
___
## _About the script and the script itself_

The script must be placed on the page of the sale itself, preferably right before the sale (1-2 minutes), the number of packs for the purchase will be requested. Every millisecond, the sell block is polled to find the buy button. Once the button appears, the script will enter the quantity and click on the buy button. After that, the page will start polling for the appearance of the confirmation block, as soon as the block appears, the confirmation button is pressed. Often, after pressing, errors are issued, so after the first press, the pressing interval is not reset. If the quantity is over. Close the page.

_How to use_
1. There is a variable "packsValue" in the script, replace its value with yours. By default 1.
2. Place this script for sale through the developer's console a couple of minutes before the start of the sale.
3. Wait for the start of the sale.
4. After a successful or unsuccessful purchase, close or refresh the page.

_Compressed script_
>let packsValue=1,buyerInterval=setInterval(buyer,1),switcher=true,countInterval;function buyer(){if(document.querySelector('.css-bsjx8j').querySelector('button')){const block=document.querySelector('.css-bsjx8j'),buyBtn=block.querySelector('button');countInterval=setInterval(clicker,1);if(switcher==false){buyBtn.click();clearInterval(buyerInterval);setInterval(apply,1)}}else{console.log('waiting selling time')}}function apply(){if(document.querySelector('.css-z9ynqk')){const divider=document.querySelector('.css-z9ynqk'),applyBtn=divider.querySelector('button');applyBtn.click()}else{console.log('waiting apply divider')}}function clicker(){if(packsValue-1!=0){document.querySelector('.css-1my7wuf').nextElementSibling.click();packsValue-=1}else{switcher=false;clearInterval(countInterval)}}

_Max supply buyer script_
>let buyerInterval=setInterval(buyer,1);function buyer(){if(document.querySelector('.css-bsjx8j').querySelector('button')){const block=document.querySelector('.css-bsjx8j'),buyBtn=block.querySelector('button'),maxBtn=block.querySelector('.css-f2ec0a');maxBtn.click();console.log('Max clicked');buyBtn.click();console.log('Buy clicked');clearInterval(buyerInterval);setInterval(apply,1)}else{console.log('waiting selling time')}}function apply(){if(document.querySelector('.css-z9ynqk')){const divider=document.querySelector('.css-z9ynqk'),applyBtn=divider.querySelector('button');applyBtn.click()}else{console.log('waiting apply divider')}}

The complete script (long-script) is available in the commented repository.

I hope my script will help at least someone.
# 
_Binance NFT sales clicker bot (eng near)_

___
## _О работе скрипта и сам скрипт_
TG: https://t.me/aliw39
Donate: 
*BTC - 18y7UP8P3Dd9kz7eJtZaLvRif22swyK9oF .
*BNB/ETH/Polygon networks - 0xa8075e5bb773572891eE6Ee3091c9D1F4177465B .
*XRP - rDgRhbCPTnGutuGzqmJjFadTWfEzvfxEj6 .

Скрипт нужно поместить на страницу самого сейла, желательно прям перед продажей(1-2 мин), появится окошка запроса количества паков. Каждую миллисекунду опрашивается блок продажи на нахождение кнопки покупки. Как только кнопка появилась, скрипт введет количество паков и нажмет на кнопку покупки. После чего начнется опрос страницы на появление блока подтверждения, как только появляется блок, нажимается кнопка подтверждения. Зачастую после нажатия выдаются ошибки, поэтому после первого нажатия интервал нажатия не сбрасывается. Если количество паков закончилось, закройте страницу.
_Главный плюс скрипта, получить бан за него невозможно._

_Как пользоваться_
1. В скрипте имеется переменная "packsValue", замените ее значение на ваше. По дефолту 1.(Перменная в начале скрипта "let packsValue=1")
2. Помещаете этот скрипт, через консоль разработчика на странице продажа, за пару минут до начала сейла.(Не закрывайте страницу)
3. Ждите начала сейла.
4. После удачной покупки или неудачной закройте или обновите страницу.

_Сжатый скрипт_
>let packsValue=1,buyerInterval=setInterval(buyer,1),switcher=!0,countInterval;function buyer(){if(document.querySelector(".css-bsjx8j").querySelector("button")){const e=document.querySelector(".css-bsjx8j"),t=e.querySelector("button");countInterval=setInterval(clicker,1),0==switcher&&(t.click(),clearInterval(buyerInterval),setInterval(apply,1))}else console.log("waiting selling time")}function apply(){if(document.querySelector(".css-z9ynqk")){const e=document.querySelector(".css-z9ynqk"),t=e.querySelector("button");t.click()}else console.log("waiting apply divider")}function clicker(){packsValue-1!=0?(document.querySelector(".css-1my7wuf").nextElementSibling.click(),--packsValue):(switcher=!1,clearInterval(countInterval))}

_Скрипт для покупки максимального количества паков_
>let buyerInterval=setInterval(buyer,1);function buyer(){if(document.querySelector('.css-bsjx8j').querySelector('button')){const block=document.querySelector('.css-bsjx8j'),buyBtn=block.querySelector('button'),maxBtn=block.querySelector('.css-f2ec0a');maxBtn.click();console.log('Max clicked');buyBtn.click();console.log('Buy clicked');clearInterval(buyerInterval);setInterval(apply,1)}else{console.log('waiting selling time')}}function apply(){if(document.querySelector('.css-z9ynqk')){const divider=document.querySelector('.css-z9ynqk'),applyBtn=divider.querySelector('button');applyBtn.click()}else{console.log('waiting apply divider')}}

Полный скрипт (long-script) доступен в репозитории с комментариями.

Надеюсь мой скрипт хоть кому-нибудь поможет.
