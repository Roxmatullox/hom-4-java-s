let a = 123;

let dec = ""

if (a<10) {
  dec = "Bir xonali "
} else if (a<100){
  dec = "Ikki xonali "
} else  {
  dec = "Uch xonali "
}

if (a%2==0) {
  dec = dec + "juft son !"
} else {
  dec = dec + "toq son !"
}

console.log(dec);