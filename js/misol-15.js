let a = 2;
let b = 2;
let c = 2;
let d = 7;

if (a==b && b==c) {
  console.log(d);
} else if (a==b && b==d){
  console.log(c);
} else  if (a==d && c==d){
  console.log(b);
} else  if (b==d && c==d){
  console.log(a);
} else {
  
} 