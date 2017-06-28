console.log('this is not breaking as hard')

var cookies =[
  'choclate chip',
  'lemon drops',
  'thin mints',
  'oreos',
  'oatmeal',
  'peanut butter',
];

function eatCookies() {
  for (var i = 0; i < cookies.length; i = i + 1) {
  eat(cookies[i])
  }

}

function eat(cookie) {
  console.log('i just ate a ' + cookie + ' cookie');
}

for (var i = 0; i < cookies.length; i = i + 1) {
  eat(cookies[i])
}

var eatButton = $(".Devour");
eatButton.on("click", eatCookies);

var text = $('.this_is_a_class');

var colorButton = $(".Color");
colorButton.on("click", function() {
  text.toggleClass('green');
});
