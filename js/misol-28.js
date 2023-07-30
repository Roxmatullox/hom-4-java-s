let ab = 11 

let b = ab % 10
let a = (ab-b) /10

let doc = ""

if (a==1) {
  doc="o'n"
} else if (a==2) {
  doc="yigirma"
} else if (a==3) {
  doc="ottiz"
} else {
  doc="qirq"
} 

if (b==1) {
  doc = doc + "bitta"
} else if (b==2) {
  doc = doc + "ikkita"
} else if (b==3) {
  doc = doc + "uchta"
} else if (b==4) {
  doc = doc + "tortta"
} else if (b==5) {
  doc = doc + "beshta"
} else if (b==6) {
  doc = doc + "oltita"
} else if (b==7) {
  doc = doc + "yettita"
} else if (b==8) {
  doc = doc + "sakkizta"
} else if (b==9) {
  doc = doc + "toqqizta"
} else {
  doc = doc + "ta"
}


console.log(doc);