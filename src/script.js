<script>
        document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('Document is ready!');
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentvalue = "";

    function evaluateResult(){
        console.log('currentvalue:', currentvalue)
        const convertedvalue = currentvalue
           .replace("×","*")
           .replace("÷","/")
           .replace('%','*0.01')
        console.log('convertedvalue:', convertedvalue)
        const result = eval(convertedvalue);
        currentvalue = result.toString();
        display.value = currentvalue;
    }

    for(let i=0; i< buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click',function() {
            const value =  button.innerText;


            if(value == "AC"){
                currentvalue = "";
                display.value = currentvalue;
            } else if(value == "="){
                evaluateResult()
            }
            
            
            else{
                currentvalue += value;
                console.log('currentvalue:', currentvalue)
                display.value = currentvalue;
            }



        })
    }
    

    });

    </script>