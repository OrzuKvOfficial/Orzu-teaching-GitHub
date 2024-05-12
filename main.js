// Xotirali qilish uchun malumotlarni saqlash
let foydalanuvchi = {
    ism: "John",
    yosh: 30,
    email: "john@example.com"
};

// Xotiraga olish
let foydalanuvchiIsm = foydalanuvchi.ism;
let foydalanuvchiYosh = foydalanuvchi.yosh;

// Xotiradan ma'lumot o'zgartirish
foydalanuvchi.ism = "Jane";

console.log("Foydalanuvchi ismi:", foydalanuvchiIsm); // John
console.log("Foydalanuvchi yoshi:", foydalanuvchiYosh); // 30
console.log("Yangi ismi:", foydalanuvchi.ism); // Jane

document.getElementById('connectButton').addEventListener('click', function() {
    // Wi-Fi-ga ulanishni boshlash uchun kerakli kodni yozing
    // Masalan:
    // window.location.href = "wi-fi-uri";
  
    // Foydalanuvchi ma'lumotlarini olish
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
  
    // Foydalanuvchi ma'lumotlarini saqlash
    saveUserInfo(username, password);
  });
  
  function saveUserInfo(username, password) {
    // Foydalanuvchi ma'lumotlarini kerakli yo'lda saqlash
    // Masalan, localStoragega saqlash:
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
  
  const audio = document.getElementById("myAudio");

function speedUp() {
  audio.playbackRate += 0.1; // Tezlash 0.1x bilan
}

function speedDown() {
  audio.playbackRate -= 0.1; // Astalash 0.1x bilan
}
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Fibonacci ketma-ketligining 10-raqami
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 100)); // 1 dan 100 gacha tasodifiy son
const name = "John";
name.split("").forEach(letter => {
  console.log(letter);
});


let matn = "JavaScript";
let kichikMatn = matn.toLowerCase();
let kattaMatn = matn.toUpperCase();
console.log(kichikMatn); // "bu matn kichik bilan boshlanadi."
console.log(kattaMatn); // "BU MATN KICHIK BILAN BOSHLANADI."
console.log(matn.charAt(4)); // "S"
console.log(matn.charCodeAt(4)); // 83 (Unicode qiymati)

let matn1 = "Salom, ";
let matn2 = "dunyo!";
let jamiMatn = matn1 + matn2;
console.log(jamiMatn); // "Salom, dunyo!"

// Xotira yaratish
var xotira = [];

// Ma'lumot qo'shish
xotira.push("Ma'lumot");

// Ma'lumotni olish
var malumot = xotira[0];
console.log(malumot); // "Ma'lumot"

const TelegramBot = require('node-telegram-bot-api');

// Botni ochish va token
const token = 'SIZNING_TOKENINGIZ';
const bot = new TelegramBot(token, {polling: true});

// Botga /start buyrug'i kelganda javob qaytarish
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Assalomu alaykum, men Telegram botman!');
});

// Botga "Salom" deb yozilganda javob qaytarish
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text.toString().toLowerCase().includes('salom')) {
    bot.sendMessage(chatId, 'Salom, qalay siz?');
  }
});

// Bluetooth qurilmalarga ulanish uchun kerakli qurilmalar yuklanganligini tekshirish
if ('bluetooth' in navigator) {
  console.log('Bluetooth mavjud');
} else {
  console.log('Bluetooth qo\'llab quvvatlanmaydi');
}

// Bluetooth qurilmalarga qo'ng'iroq yuborish uchun funksiya
async function connectToDevice() {
  try {
    // Qurilma tanlash
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['battery_service'] }] // Ma'lum bir xizmatga ega qurilmalar
    });

    // Qurilmaning xizmatlarini olish
    const service = await device.gatt.connect();

    // Xizmatda kerakli xususiyatni topish
    const batteryService = await service.getPrimaryService('battery_service');
    const batteryLevel = await batteryService.getCharacteristic('battery_level');

    // Xususiyat qiymatini olish
    const value = await batteryLevel.readValue();

    // Qiymatni chiqarish
    console.log('Battery Level:', value.getUint8(0));
  } catch (error) {
    console.error('Xato:', error);
  }
}
// Ulanishni boshlash uchun tugma
const connectButton = document.querySelector('button');
connectButton.addEventListener('click', connectToDevice);
// List yaratish
var myList = [1, 2, 3, 4, 5];

// Elementlarga murojat
console.log(myList[0]); // 1
console.log(myList[2]); // 3

// List uzunligi
console.log(myList.length); // 5

// Element qo'shish
myList.push(6);
console.log(myList); // [1, 2, 3, 4, 5, 6]

// Elementni o'zgartirish
myList[1] = 10;
console.log(myList); // [1, 10, 3, 4, 5, 6]

// Elementni o'chirish
myList.splice(2, 1);
console.log(myList); // [1, 10, 4, 5, 6]

// Nodemailer modulini chaqirish
const nodemailer = require('nodemailer');

// Jo'natiladigan email manzili va autentifikatsiya ma'lumotlari
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Pochta xizmati (masalan, Gmail)
  auth: {
    user: 'sender@gmail.com', // Jo'natuvchi email manzili
    pass: 'yourpassword' // Jo'natuvchi email paroli
  }
});

// Jo'natish uchun xabar ma'lumotlari
const mailOptions = {
  from: 'sender@gmail.com', // Jo'natuvchi email manzili
  to: 'recipient@example.com', // Qabul qiluvchi email manzili
  subject: 'Sarlavha', // Xabar sarlavhasi
  text: 'Xabar matni' // Xabar matni
};

// Xabarni yuborish
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Xabar yuborildi: ' + info.response);
  }
});
var send = document.getElementById("musiqa");

  function playMusic() {
    audio.play();
  }

  function pauseMusic() {
    audio.pause();
  }
  function malumotQabul(qabulQilinganMalumot) {
    console.log("Qabul qilingan malumot: " + qabulQilinganMalumot);
}

// Funksiyani chaqirish
malumotQabul("Salom, dunyo!"); // "Salom, dunyo!" deb chiqadi

function sendData() {
  // Burada göndərmək istədiyiniz məlumatları prosesləyəcək kodlar olmalıdır
  console.log("Data sent!"); // Bu, sadəcə konsol logudur. Gerçək prosesləmə funksiyası burada olmalıdır.
}
// Tarjima ma'lumotlarini saqlash uchun lug'at
var tarjima = {
    "salom": "hello",
    "hayr": "goodbye",
    // Yana boshqa so'zlar qo'shishingiz mumkin
};

// So'zni tarjima qiluvchi funksiya
function tarjima_qilish(soz) {
    return tarjima[soz] || "Tarjima topilmadi";
}

// Test qilish
console.log(tarjima_qilish("salom"));  // "hello" chiqadi
console.log(tarjima_qilish("hayr"));   // "goodbye" chiqadi
console.log(tarjima_qilish("nima gap"));  // "Tarjima topilmadi" chiqadi
axios.get('malumotlar.json')
  .then(function (response) {
    // Malumotlarni qabul qilingan holatda amalni bajarish
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
