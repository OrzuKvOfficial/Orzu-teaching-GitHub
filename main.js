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
