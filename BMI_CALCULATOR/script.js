const form=document.querySelector('form')
form.addEventListener('submit',function(a){
    a.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please giave a valid height';
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please giave a valid weight ';
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = bmi;
        
        if (bmi < 18.6) {
          
          results.innerHTML ='<p style = " color : darkblue; font-weight: bold; " > Your BMI is ' + bmi + ': You are Under Weight</p>';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
        
          results.innerHTML = '<p style = " color : darkgreen ; font-weight: bold; ">Your BMI is ' + bmi + ': Your Weight is Normal</p>';
        } else {
          
          results.innerHTML = '<p style = " color : red ; font-weight: bold; ">Your BMI is ' + bmi + ': You are Over Weight</p>';
        }
        
    }
    
    
});

