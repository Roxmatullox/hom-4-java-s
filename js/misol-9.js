let a = 1;
let b = 7;

let d=0

if (a>b) {
  d=a
} else {
  d=b
}

if (a!=b) {
  a=d
  b=d
} else {
  a=0
  b=0
}

console.log(a,b);