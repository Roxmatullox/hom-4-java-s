let a = 1;
let b = 7;
let c = 0;

if (a>b && b>c) {
  a=a**2
  b=b**2
  c=c**2
} 
else{
  a=a-(a*2)
  b=b-(b*2)
  c=c-(c*2)
}

console.log(a,b,c);