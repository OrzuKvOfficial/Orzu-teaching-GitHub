mevalar = ["olma", "banan", "nok", "anor"]

# Ro'yxatni chiqarish
print("Birinchi meva:", mevalar[0])

# Kameraga ulanish
cap = cv2.VideoCapture(0)

# Cheksiz tsikl
while True:
    # Kamerani o'qish
    ret, frame = cap.read()

    # O'qilgan kadrlarni ko'rsatish
    cv2.imshow('Kamera', frame)

    # Ekrandagi 'q' tugmasi bosilganda tsiklni to'xtatish
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Qisqa bo'lish
cap.release()
cv2.destroyAllWindows()
# Toplama işlemi
def toplama(x, y):
    return x + y

# Çıkarma işlemi
def cikarma(x, y):
    return x - y

# Çarpma işlemi
def carpma(x, y):
    return x * y

# Bölme işlemi
def bolme(x, y):
    if y == 0:
        return "Bir sayıyı sıfıra bölemezsiniz!"
    else:
        return x / y

print("Yapmak istediğiniz işlemi seçin:")
print("1. Toplama")
print("2. Çıkarma")
print("3. Çarpma")
print("4. Bölme")

secim = input("Seçiminizi yapın (1/2/3/4): ")

sayi1 = float(input("Birinci sayıyı girin: "))
sayi2 = float(input("İkinci sayıyı girin: "))

if secim == '1':
    print(sayi1, "+", sayi2, "=", toplama(sayi1, sayi2))

elif secim == '2':
    print(sayi1, "-", sayi2, "=", cikarma(sayi1, sayi2))

elif secim == '3':
    print(sayi1, "*", sayi2, "=", carpma(sayi1, sayi2))

elif secim == '4':
    print(sayi1, "/", sayi2, "=", bolme(sayi1, sayi2))

else:
    print("Geçersiz giriş")

import subprocess

def connect_to_wifi(ssid, password):
    try:
        # Wi-Fi ulanishini sozlash
        config = f"""
        network={{
            ssid="{ssid}"
            psk="{password}"
        }}
        """
        
        # Wpa_supplicant konfiguratsiya faylini yaratish
        with open('/etc/wpa_supplicant/wpa_supplicant.conf', 'w') as file:
            file.write(config)

        # Wpa_supplicant xizmatini qayta ishga tushirish
        subprocess.run(['sudo', 'wpa_cli', '-i', 'wlan0', 'reconfigure'], check=True)
        print(f'{ssid} tarmog‘iga ulanish amalga oshirildi.')

    except subprocess.CalledProcessError as e:
        print(f'Xatolik yuz berdi: {e}')

# Wi-Fi tarmog'iga ulanish
ssid = "your_ssid"
password = "your_password"
connect_to_wifi(ssid, password)
