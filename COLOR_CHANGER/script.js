const buttons=document.querySelectorAll('.button');
// console.log(buttons)

const body=document.querySelector("body");


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(a){
        // console.log(a)
        // console.log(a.target);

        // By using if-conditon

        if(a.target.id=='Orange'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id=='White'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id=='Blue'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id=='Green'){
            body.style.backgroundColor ="green";
        }
    })

});

const buttonone=document.querySelectorAll('.button1');

buttonone.forEach(function(button1){
    // console.log(button);
    button1.addEventListener('click',function(b){
 
        // By using Switch case

        switch(b.target.id){
            case 'Red':
            case 'Cyan':
            case 'Yellow':
            case 'Violet':
                body.style.backgroundColor = b.target.id;
                break;
            default:
                break;
        }
    })

});