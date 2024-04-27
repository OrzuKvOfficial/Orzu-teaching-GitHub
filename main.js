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
