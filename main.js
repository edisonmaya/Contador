const value = document.querySelector("#value")
const inc   = document.querySelector("#inc")
const dec   = document.querySelector("#dec")
const res   = document.querySelector("#res")
const h1    = document.querySelector("h1")

let count = 0
value.textContent = count

function c_color ()
{ 
    if(count <= 5)                  return value.style.color='black', value.style.border='1px solid black', h1.style.color='black'
    if(count > 5 && count <= 10)    return value.style.color='blue' , value.style.border='2px solid blue' , h1.style.color='blue'   
    else                            return value.style.color='red'  , value.style.border='3px solid red'  , h1.style.color='red'
}

inc.addEventListener("click", function() {
    count++
    c_color ()
    value.textContent = count;                        
})

dec.addEventListener("click", function() {
    if (count > 0) {
        count--
        c_color ()
        value.textContent = count;
    }
})

res.addEventListener("click", function() {
    count = 0
    value.style.color='black', value.style.border='1px solid black', h1.style.color='black'
    //value.classList.add('red')
    value.textContent = count
})