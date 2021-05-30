// var n = prompt('enter your c.n.i.c number')
//     if (42101-9079460-1) {
//      alert ('please enter it')   
//     }
//     else{'do not enter it'}
//     else if ('customer card'){alert ('please enter it') };
// console.log('this');
// const age = 65;
// prompt('whats your age')
// if (age==19){
//     alert('age is 19')
// }
// else if (age == 65){
//     alert('age is 65')
// }
// else{alert ('age is not 19')}
// console.time('timeStart')
// console.log('hello  world')
// console.log(45*5)
// console.log(true)
// console.log([10,90,'of','kamran',])
// console.table({kamran:'age',aliShan:'age'})
// console.warn("this is not allowed")
// console.timeEnd('timeStart')
// console.error("this is an error" )
//var a  = +prompt('enter your number' )
// var length = +prompt( 'enter table length')
// for()   
// var a  = +prompt('enter your number' )
// var length = +prompt( 'enter table length')
// for(){}   
// var a  = +prompt('enter your number' )
// if (isNaN(a)){document.write('its not a number','<br>','enter only number')}
// else{
// if(a % 2 === 0) {
//     document.write('this is even number')
// }
// else{
//     document.write('this is a odd number')
// }
// }
 
var _name = prompt('enter your full name');
var  roll  = +prompt('enter your class roll number');
var class_stander = prompt('enter your class');
var math = +prompt('enter your math marks');
var physics = +prompt('enter your physics marks');
var chemistry = +prompt('enter your chemistry marks');
var urdu = +prompt('enter your urdu marks');
var biology = +prompt('enter your bio marks');
var  obtained_marks = parseInt(math)+parseInt(physics)+
parseInt(chemistry)+parseInt(urdu)+parseInt(biology);  
var par =obtained_marks * 100 / 500; 
document.write('your name is '+ _name + '</br>');
document.write('your roll number is ' + roll +'</br>' );
document.write('your class is '+ class_stander+ '</br>');
document.write('your marks is ' + obtained_marks+'</br>' );
document.write('your percentage is'+ par +'%' + '</br>');
if(par >= 80){
    document.write('your grade is A1' );
}
else if(par >= 70){
    document.write('your grade is A' );
}
else if(par >= 60){
    document.write('your grade is B' );
}
else if(par >= 50){
    document.write('your grade is C' );
}
else if(par >= 40){
    document.write('your grade is D' );
}
else if(par >= 30){
    document.write('your grade is E' );
}
else{
    document.write('you are fail this exam','</br>','please try next time'  );
}






