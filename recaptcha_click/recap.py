import pyautogui
recaptcha_img = './img/long-recap.png'
check_box = './img/square.png'
while True:
    button = pyautogui.locateOnScreen(recaptcha_img, confidence=0.85)
    if button:
        pyautogui.click(button)
        print('finded')
        break