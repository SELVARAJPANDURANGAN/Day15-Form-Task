function submitButton(){
var firstName = document.getElementById('firstName').value
    console.log(firstName)
 let lastName = document.getElementById('lastName').value
console.log(lastName)
let address = document.getElementById('address').value
 console.log(address)
let pincode = document.getElementById('pincode').value
console.log(pincode)
    let state= document.getElementById('state').value
console.log(state)
    let country = document.getElementById('country').value
console.log(country)
    let male = document.getElementById('male').value
 console.log(male)
    let female = document.getElementById('female').value
console.log(female)
var td1=document.getElementById('td1')
td1.innerHTML=firstName
var td2=document.getElementById('td2')
td2.innerHTML=lastName
var td3=document.getElementById('td3')
td3.innerHTML=address
var td4=document.getElementById('td4')
td4.innerHTML=pincode
if(document.getElementById('male').checked) {
var td5=document.getElementById('td5')
td5.innerHTML=male}
else if (document.getElementById('female').checked) {
var td5=document.getElementById('td5')
td5.innerHTML=female}
var td6=document.getElementById('td6')
var checkbox=document.getElementsByName('food')
var checkeditems=0;
var list=[];
for (let i=0;i<checkbox.length;i++){
if(checkbox[i].checked){
    checkeditems++;
    console.log(checkbox[i].value)
    list.push(checkbox[i].value)}}
if(list.length<2){
    alert("please select atleast two food items")
    td6.innerHTML=""
} else {
td6.innerHTML=list;}
var td7=document.getElementById('td7')
td7.innerHTML=state
var td8=document.getElementById('td8')
td8.innerHTML=country
}



