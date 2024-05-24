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

import dash
from dash import html, dcc
import plotly.graph_objs as go
import dash_core_components as dcc

app = dash.Dash(__name__)

# Layout
app.layout = html.Div(style={'textAlign': 'center', 'backgroundColor': '#f0f0f0', 'height': '100vh', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'}, children=[
    html.Div(style={'display': 'flex', 'gap': '20px'}, children=[
        html.Div(style={'width': '100px', 'height': '100px', 'backgroundColor': '#ff6347', 'borderRadius': '50%'}, id='circle'),
        html.Div(style={'width': '0', 'height': '0', 'borderLeft': '50px solid transparent', 'borderRight': '50px solid transparent', 'borderBottom': '100px solid #4682b4'}, id='triangle'),
        html.Div(style={'width': '100px', 'height': '100px', 'backgroundColor': '#32cd32'}, id='square')
    ])
])

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)

import csv

# Ma'lumotlarni Exseldan olish uchun pandas kutubxonasidan foydalanamiz
import pandas as pd

# Exsel faylini o'qiymiz
df = pd.read_excel('your_file.xlsx')

# DataFrame'ni CSV formatiga o'girib, faylga saqlaymiz
df.to_csv('output.csv', index=False)

print("Ma'lumotlar muvaffaqiyatli CSV formatiga o'tkazildi va 'output.csv' fayliga saqlandi.")

from sqlalchemy import create_engine

# Ma'lumotlarni Exseldan olish uchun pandas kutubxonasidan foydalanamiz
import pandas as pd

# Exsel faylini o'qiymiz
df = pd.read_excel('your_file.xlsx')

# SQL aloqasini o'rnatamiz (bu yerda SQLite'ni misol sifatida ko'rsatamiz)
engine = create_engine('sqlite:///output.db')

# DataFrame'ni SQL bazaga yozamiz
df.to_sql('table_name', con=engine, if_exists='replace', index=False)

print("Ma'lumotlar muvaffaqiyatli SQL bazaga o'tkazildi va 'output.db' fayliga saqlandi.")
import bluetooth

server_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
port = 1
server_sock.bind(("", port))
server_sock.listen(1)

print("Kuting, ulanishlar kutilmoqda...")
client_sock, address = server_sock.accept()
print(f"Ulangan manzil: {address}")

while True:
    data = client_sock.recv(1024)
    if not data:
        break
    print(f"Olingan ma'lumot: {data.decode('utf-8')}")
    client_sock.send(data)

client_sock.close()
server_sock.close()
import bluetooth

target_name = "Qurilmangizning_nomi"  # Telefonning Bluetooth nomi
target_address = None

nearby_devices = bluetooth.discover_devices()

for bdaddr in nearby_devices:
    if target_name == bluetooth.lookup_name(bdaddr):
        target_address = bdaddr
        break

if target_address is not None:
    print(f"Qurilma topildi: {target_address}")
else:
    print("Qurilma topilmadi.")
    exit()

sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
port = 1
sock.connect((target_address, port))

while True:
    message = input("Yuborish uchun xabar kiriting: ")
    if message.lower() == "exit":
        break
    sock.send(message)
    data = sock.recv(1024)
    print(f"Olingan javob: {data.decode('utf-8')}")

sock.close()

from flask import Flask, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data['text']
    dest_lang = data['dest_lang']
    translated = translator.translate(text, dest=dest_lang)
    return jsonify({'translated_text': translated.text})

if __name__ == '__main__':
    app.run(debug=True)
import pygame
import time

# Pygame kutubxonasini boshlash
pygame.mixer.init()

# Musiqa faylini yuklash
pygame.mixer.music.load('your_music_file.mp3')

# Musiqani o'ynatish
pygame.mixer.music.play()

# Musiqa tugaguncha kutish
while pygame.mixer.music.get_busy():
    time.sleep(1)

print("Musiqa tugadi!")
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    name = data.get('name')
    response = {'message': f'Hello, {name}!'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
