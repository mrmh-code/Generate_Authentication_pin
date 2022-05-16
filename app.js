function getPin(){
    const Pin=Math.round(Math.random()*10000);
    const pinString=Pin+'';

    if(pinString.length==4){
        return Pin;
    }else{
        
        return getPin();
    }

}


function generatePin(){
    const pin=getPin();
    const displayPin=document.getElementById('display-pin');
    displayPin.value=pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const TargetText=event.target.innerText;
    const typeNumber=document.getElementById('type-number');

    if(isNaN(TargetText)){
        if(TargetText=='C'){
            typeNumber.value='';
        }
    }else{
        const totalCal=typeNumber.value+TargetText;
        typeNumber.value=totalCal;
    }

})


function verify_pin(){
    const GenerateDisplayPIN=document.getElementById('display-pin').value;
    const TypeInputPin=document.getElementById('type-number').value;
    const failError=document.getElementById('notify-fail');
    const successMessage=document.getElementById('notify-success');

    if(GenerateDisplayPIN==TypeInputPin){
      failError.style.display='none';
      successMessage.style.display='block';
  
    }else{
        successMessage.style.display='none';
        failError.style.display='block';
     
    }
}

