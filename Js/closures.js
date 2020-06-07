/*
JS

Basically, the function defined within other 
function is accessible only within this function. 
But may be passed as a result and then this 
result may be called.

*/

function getFeatures(mes) {
    function addDiezLetter() {
       return mes += '#';
    }

    return addDiezLetter; // Returns but doesn't invoke
}


let caption = "Some Text";
let launcher = getFeatures(caption);

 

// invokes 5 times 
for (let i = 0; i < 5; i++) {
    console.log(launcher()); 
}
 
/*
Some Text#
Some Text##
Some Text###
Some Text####
Some Text#####
*/ 
