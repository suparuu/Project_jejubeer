$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>section');
$('footer').load('./inc.html footer>div');


const Ani01 = document.querySelector(".subtitle01"),
  Ani02 = document.querySelector(".subtitle02"),
  Ani03 = document.querySelector(".subtitle03"),
  Ani04 = document.querySelector(".subtitle04");

function aa() {
  let A = window.pageYOffset,
    B = Ani01.scrollHeight,
    C = Ani02.scrollHeight,
    D = Ani03.scrollHeight,
    E = Ani04.scrollHeight;

  if (A >= B) {
    Ani01.classList.add("on");
  }
  if (A >= (B + C)) {
    Ani02.classList.add("on");
  }
  if (A >= (B + C + D)) {
    Ani03.classList.add("on");
  }
  if (A >= (B + C + D + E)) {
    Ani04.classList.add("on");
  }

  console.log(A, B, C, D, E);
}
window.addEventListener("scroll", aa);