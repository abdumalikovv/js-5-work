
var Info = prompt("Salom. Ayni paytda sizda 10000$. Siz davom etasizmi?");
alert(Info);

var Ticket = prompt("Chipta narxi 4500$. Davom etasizmi?");
alert(Ticket);

var Caution = prompt("Diqqat! Ayni paytda sizda 5500$.Davom etasizmi?");
alert(Caution);

var Account = prompt("Mehmonxona narxi 2500$. Davom etasizmi?");
alert(Account);

var Caution = prompt("Diqqat! Ayni paytda sizda 3000$. Davom etasizmi?");
alert(Caution);

var Other = prompt("Muzeylar va sizga kerak bo'lgan boshqa xarajatlar uchun 3000$. Davom etasizmi?");
alert(Other);

var allcaution = 10000;

if ((allcaution >= "10000") == (allcaution <= "10000")){
    console.log("Sizning barcha pullaringiz xarajatlarga yetdi. Ayni paytda sizda 0$ bor. Omad.");
}else{
    console.log("Siz barcha xarajatlarni to'lay olmaysiz! Siz biroz kutishingiz kerak!");
};
