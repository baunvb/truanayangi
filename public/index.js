

function start() {
  var hat = document.getElementsByClassName('m-game__wrapper')[0];
  var token = true;

  if (!token) return;
  token = false;

  var oldDeg = hat.getAttribute("rotate") ? hat.getAttribute("rotate") : 0;
  var deg = Math.floor(Math.random() * 360) + 1080 + parseInt(oldDeg);
  hat.setAttribute("rotate", deg);
  hat.style.transform = `rotate(${deg}deg)`
  setTimeout(function () {
    token = true;
  }, 7000);
}

function selectMenu() {
  var select = document.getElementById("menu").value;
  fillMenu(select)
}

function refresh() {
  var select = document.getElementById("menu").value;
  fillMenu(select)
}

function getRandom(arr) {
  var n = 6;
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if(len <= n)
    return arr
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function fillMenu(value) {
  var menu = DATA_MENU[value]
  var order = document.getElementById("order");
  order.innerHTML=''
  var random = getRandom(menu)
  for (let i = 0; i < random.length; i++) {
    var item = document.createElement("div");
    item.className = "m-game__text";
    item.innerHTML = random[i]
    order.appendChild(item)
  }
}

var DATA_MENU = {
  "antrua": [
    "Bún chả",
    "Bún cá",
    "Phở cuốn Mai Hương",
    "Cơm thố",
    "Cơm văn phòng",
    "Cơm gà Bento Delichi",
    "Pizza",
    "Lotteria",
    "Cơm Tấm",
    "Bánh Mỳ",
    "Nem nướng"
  ],
  "annhau": [
    "Mẹt gà",
    "Mẹt lợn",
    "Ngan phố",
    "Lòng",
    "Bia Hải Xồm",
    "Vịt"
  ],
  "cafe": [
    "HighLand",
    "Phúc Long",
    "Twitter Beans",
    "Phê La",
    "Trung Nguyên",
    "Tự pha"
  ],
  "che": [
    "Chè Cóng",
    "Tào phớ",
    "Sinh tố",
    "Sữa chua trân châu"
  ]
}


function defaultMenu() {
  fillMenu('antrua')
}
window.addEventListener('load', function () {
  defaultMenu()
})
