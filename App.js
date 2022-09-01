let calculateBtn = document.getElementById('btn');
let calculate = function(){

    /// Getting Element By Id
    let billamount  = document.getElementById('billamount');
    let servicep = document.getElementById('servicep');
    let peopleshare   = document.getElementById('peopleshare');
    let result      = document.getElementById('result');
    
    /// Validate Input
    let error = 0;

    /// check if the totalBill is empty
    if(billamount.value == ""){
        billamount.style.borderColor = "#87010c";
        let error = 1;
    }
    else{
        billamount.style.borderColor = "#87010c";
        let error = 0;
    }

    ///check if the service percentage is 0

    if(servicep.value == 0){
        servicep.style.borderColor = " #00666c";
        let error = 1;
    }
    else{
       servicep.style.borderColor = " #00666c";
        let error = 0;
    }

     ///check if the number of people is none

     if(peopleshare.value == ""){
        peopleshare.style.borderColor = "#87010c";
        let error = 1;
    }
    else{
        peopleshare.style.borderColor = "#87010c";
        let error = 0;
    }


    /// cjeck if there is no error
    if(!error){
        let tip = 0;
        // calculate tip
        let tipInit = billamount.value * servicep.value;
        
        // if more than one people are sharing the bill
        // and not empty
        if(peopleshare.value  !=1 && peopleshare.value  !=""){
            let tipEach = tipInit / peopleshare.value;

            // round to two decimal places
            let tipEachRounded = Math.round(tipEach * 100)/100;

           // the next line allows us to always
           // have two digits after decimal point
           
           tipEachRounded = tipEachRounded.toFixed(2);

           // if the tip rounded to 0 assign tipEach
           // else assign tipEachRounded and 'each' string

           tip = tipEachRounded == 0? tipEach + 'each': tipEachRounded + 'each';
           
        }
        else{
            let tipRounded = Math.round(tipEach * 100)/100;

            /// the next linr allows us to always
            // have two digits after decimal point
            tipRounded = tipRounded.toFixed(2);

            // if tip rounded to 0 assingn tipInit
            // else assign tipRounded
            tip = tipRounded = 0 ? tipInit : tipRounded;
        }
        result.innerText = tip;
    }
    else{
        return ;
    }
}
/// adding click Event to the calculate Button
calculateBtn.addEventListener('click',calculate);

///// alert when clicking directly on calculate button 