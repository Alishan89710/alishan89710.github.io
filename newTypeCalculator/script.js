const AgeDifference =  () => {
    var e_date = +prompt('enter your birth date  *');
    if (e_date > 31){
      alert('please enter valid date')
      return;
   }
  
    var e_month =  prompt('enter your birth month *');
    if (e_month > 12 ) {
        alert ('please enter valid month')
      return;
      }
   var  e_year = +prompt('enter your birth year *');
   if  (e_year > 2021){
       alert ('please enter valid year')
       return;
  }
   var p_date = new Date();
   var arr_month = p_date.getMonth();
   var MonthArr = ["jun", "feb", "mar" , "apr" , "may" , "june","jal", "aug" , "sep" ,"oct" , "nov" , "dec"]
   var monthName = MonthArr[arr_month];
    let equal =   e_month === monthName
    true; 
    monthName  = monthName.toLowerCase();
   let new_date = new Date(`${e_date} , ${e_month} , ${e_year}`);
   console.log(new_date);
   let N_date = new Date();
   console.log(N_date);
   let difference = N_date - new_date  ;
   console.log(difference);
   
   let days = Math.floor(difference /(1000 * 60 *60)  )
   let months = Math.floor(difference /(1000 * 60 * 60 * 24) )
   console.log (difference)
   
   
   let years = Math.floor(difference /(1000 * 60 * 60 * 24 * 365.25))
   
   console.log(days)
  console.log(months)
  console.log(years)
  
  document.write(`${years} years ${months} months  ${days} days`)
  
  
  
   
  }
  
  AgeDifference();
