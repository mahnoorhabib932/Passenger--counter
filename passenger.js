let count = 0;
const countEL =     document.getElementById("counter");
 
function increment() {
    count++;
    countEL.innerHTML = count
}


function save() {
    console.log(count);
}

let saveEL = document.getElementById("save-el")
console.log(saveEL)
 

function save() {
    let countstr = count + " - "
    saveEL.innerText += countstr;
    count = 0;
    countEL.innerHTML = count;
    
    console.log(count)

}