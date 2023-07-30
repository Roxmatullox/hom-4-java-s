let abc = 111 

let c = abc % 10
let b = (abc-c) % 100 / 10
let bc = abc%100
let a = (abc - bc) /100


let doc = ""



if (a==1) {
  doc = doc + "biryuz"
} else if (a==2) {
  doc = doc + "ikkiyuz"
} else if (a==3) {
  doc = doc + "uchyuz"
} else if (a==4) {
  doc = doc + "toryuz"
} else if (a==5) {
  doc = doc + "beshyuz"
} else if (a==6) {
  doc = doc + "oltiyuz"
} else if (a==7) {
  doc = doc + "yettiyuz"
} else if (a==8) {
  doc = doc + "sakkizyuz"
} else if (a==9) {
  doc = doc + "toqqizyuz"
} else {
  doc = doc + "xato"
}

if (b==1) {
  doc = doc + " on"
} else if (b==2) {
  doc = doc + " yigirma"
} else if (b==3) {
  doc = doc + " ottiz"
} else if (b==4) {
  doc = doc + " qirq"
} else if (b==5) {
  doc = doc + " ellik"
} else if (b==6) {
  doc = doc + " otmush"
} else if (b==7) {
  doc = doc + " yetmush"
} else if (b==8) {
  doc = doc + " sakson"
} else if (b==9) {
  doc = doc + " toqson"
} else {
  doc = doc + ""
}

if (c==1) {
  doc = doc + " bitta"
} else if (c==2) {
  doc = doc + " ikkita"
} else if (c==3) {
  doc = doc + " uchta"
} else if (c==4) {
  doc = doc + " tortta"
} else if (c==5) {
  doc = doc + " beshta"
} else if (c==6) {
  doc = doc + " oltita"
} else if (c==7) {
  doc = doc + " yettita"
} else if (c==8) {
  doc = doc + " sakkizta"
} else if (c==9) {
  doc = doc + " toqqizta"
} else {
  doc = doc + " ta"
}


console.log(doc);