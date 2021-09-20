import pyautogui
recaptcha_img = './long-recap.png'
check_box = './square.png'
while True:
    button = pyautogui.locateOnScreen(recaptcha_img, confidence=0.85)
    if button:
        pyautogui.click(button)
        print('finded')
        break