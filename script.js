var a11 = document.getElementById("a11")
var a12 = document.getElementById("a12")
var a13 = document.getElementById("a13")

var a21 = document.getElementById("a21")
var a22 = document.getElementById("a22")
var a23 = document.getElementById("a23")

var a31 = document.getElementById("a31")
var a32 = document.getElementById("a32")
var a33 = document.getElementById("a33")

var a11n = 0
var a12n = 0
var a13n = 0

var a21n = 0
var a22n = 0
var a23n = 0

var a31n = 0
var a32n = 0
var a33n = 0
    
    
a11.addEventListener("click", Vermelho1)           
a12.addEventListener("click", Vermelho2)
a13.addEventListener("click", Vermelho3)

a21.addEventListener("click", Vermelho4)
a22.addEventListener("click", Vermelho5)        
a23.addEventListener("click", Vermelho6)

a31.addEventListener("click", Vermelho7)
a32.addEventListener("click", Vermelho8)
a33.addEventListener("click", Vermelho9)


function Vermelho1() {
    
    a11.style.background = 'red'
    a11n = 1

    //VITÓRIA
    if ((a11n == 1 && a12n == 1 && a13n == 1) || (a11n == 1 && a21n == 1 && a31n == 1) || (a11n == 1 && a22n == 1 && a33n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a33n == 0) {   
        //SEGUNDA JOGADA
        if (a11n == 1 && a12n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a31n == 1 && a11n == 1) {
            a21.style.background = 'yellow' 
            a21n = 2 
        }
        else if (a13n == 1 && a11n == 1) {
            a12.style.background = 'yellow' 
            a12n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a11n == 1 && a12n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a22n == 1 && a11n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
        
    }
    else if (a31n == 0) {
        a31.style.background = 'yellow'
        a31n = 2
    }

    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }

    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a21n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
       

}
function Vermelho2() {
    
    a12.style.background = 'red'
    a12n = 1

    //VITÓRIA
    if ((a11n == 1 && a12n == 1 && a13n == 1) || (a12n == 1 && a22n == 1 && a32n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a31n == 0) {   
        
        //SEGUNDA JOGADA
        if (a11n == 1 && a12n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a22n == 1 && a12n == 1) {
            a32.style.background = 'yellow' 
            a32n = 2 
        }
        else if (a32n == 1 && a12n == 1) {
            a22.style.background = 'yellow' 
            a22n = 2 
        }
        else {
            a31.style.background = 'yellow' 
            a31n = 2  
        }
        
    }
    else if (a33n == 0) {
        //SEGUNDA JOGADA
        if (a13n == 1 && a12n == 1) {
            a11.style.background = 'yellow' 
            a11n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a13n == 0) {
        a13.style.background = 'yellow'
        a13n = 2
    }

    else if (a11n == 0) {
        a11.style.background = 'yellow'
        a11n = 2
    }
    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }

    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }


}
function Vermelho3() {
    
    a13.style.background = 'red'
    a13n = 1

    //VITÓRIA
    if ((a11n == 1 && a12n == 1 && a13n == 1) || (a13n == 1 && a23n == 1 && a33n == 1)  || (a31n == 1 && a22n == 1 && a13n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a31n == 0) {       
        //SEGUNDA JOGADA
        if (a13n == 1 && a23n == 1) {
            a33.style.background = 'yellow' 
            a33n = 2 
        }
        else if (a12n == 1 && a13n == 1) {
            a11.style.background = 'yellow' 
            a11n = 2 
        }
        else if (a11n == 1 && a13n == 1) {
            a12.style.background = 'yellow' 
            a12n = 2 
        }
        else if (a33n == 1 && a13n == 1) {
            a23.style.background = 'yellow' 
            a23n = 2 
        }
        else {
            a31.style.background = 'yellow' 
            a31n = 2  
        }
    }
    else if (a33n == 0) {
        //SEGUNDA JOGADA
        if (a13n == 1 && a23n == 1) {
            a33.style.background = 'yellow' 
            a33n = 2 
        }
        else if (a12n == 1 && a13n == 1) {
            a11.style.background = 'yellow' 
            a11n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a11n == 0) {
        a11.style.background = 'yellow'
        a11n = 2
    }

    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }

    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
}


function Vermelho4() {
    
    a21.style.background = 'red'
    a21n = 1

    //VITÓRIA
    if ((a21n == 1 && a22n == 1 && a23n == 1) || (a21n == 1 && a11n == 1 && a31n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a33n == 0) {       
        //SEGUNDA JOGADA
        if (a31n == 1 && a21n == 1) {
            a11.style.background = 'yellow' 
            a11n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a23n == 1 && a21n == 1) {
            a22.style.background = 'yellow' 
            a22n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a11n == 1 && a12n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a22n == 1 && a21n == 1) {
            a23.style.background = 'yellow' 
            a23n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }
    else if (a31n == 0) {
        a31.style.background = 'yellow'
        a31n = 2
    }

    else if (a11n == 0) {
        a11.style.background = 'yellow'
        a11n = 2
    }
    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }

    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }
}
function Vermelho5() {
    
    a22.style.background = 'red'
    a22n = 1

    //VITÓRIA
    if ((a21n == 1 && a22n == 1 && a23n == 1) || (a12n == 1 && a22n == 1 && a32n == 1) || (a11n == 1 && a22n == 1 && a33n == 1)  || (a31n == 1 && a22n == 1 && a13n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a33n == 0) {       
        //SEGUNDA JOGADA
        if (a12n == 1 && a22n == 1) {
            a32.style.background = 'yellow' 
            a32n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a23n == 1 && a22n == 1) {
            a21.style.background = 'yellow' 
            a21n = 2 
        }
        else if (a32n == 1 && a22n == 1) {
            a12.style.background = 'yellow' 
            a12n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a12n == 1 && a22n == 1) {
            a32.style.background = 'yellow' 
            a32n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a21n == 1 && a22n == 1) {
            a23.style.background = 'yellow' 
            a23n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }
    else if (a31n == 0) {
        a31.style.background = 'yellow'
        a31n = 2
    }

    else if (a11n == 0) {
        a11.style.background = 'yellow'
        a11n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }

    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
   
}
function Vermelho6() {
    
    a23.style.background = 'red'
    a23n = 1

    //VITÓRIA
    if ((a21n == 1 && a22n == 1 && a23n == 1) || (a13n == 1 && a23n == 1 && a33n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a31n == 0) {       
        //SEGUNDA JOGADA
        if (a33n == 1 && a23n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a22n == 1 && a23n == 1) {
            a21.style.background = 'yellow' 
            a21n = 2 
        }
        else if (a21n == 1 && a23n == 1) {
            a22.style.background = 'yellow' 
            a22n = 2 
        }
        else {
            a31.style.background = 'yellow' 
            a31n = 2  
        }
    }
    else if (a11n == 0) {
        //SEGUNDA JOGADA
        if (a13n == 1 && a23n == 1) {
            a33.style.background = 'yellow' 
            a33n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else {
            a33.style.background = 'yellow' 
            a33n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a33n == 1 && a23n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }

    else if (a33n == 0) {
        a33.style.background = 'yellow'
        a33n = 2
    }
    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }

    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }
    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }
}


function Vermelho7() {
    
    a31.style.background = 'red'
    a31n = 1

    //VITÓRIA
    if ((a31n == 1 && a32n == 1 && a33n == 1) || (a11n == 1 && a21n == 1 && a31n == 1) || (a31n == 1 && a22n == 1 && a13n == 1)) {
    vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a13n == 0) {       
        //SEGUNDA JOGADA
        if (a33n == 1 && a32n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a31n == 1 && a21n == 1) {
            a11.style.background = 'yellow' 
            a11n = 2 
        }
        else if (a11n == 1 && a31n == 1) {
            a21.style.background = 'yellow' 
            a21n = 2 
        }
       
        else if (a32n == 1 && a31n == 1) {
            a33.style.background = 'yellow' 
            a33n = 2 
        }
        else if (a22n == 1 && a32n == 1) {
            a12.style.background = 'yellow' 
            a12n = 2 
        }
        else if (a33n == 1 && a31n == 1) {
            a32.style.background = 'yellow' 
            a32n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }
    else if (a11n == 0) {
        a11.style.background = 'yellow'
        a11n = 2
    }
    else if (a33n == 0) {
        a33.style.background = 'yellow'
        a33n = 2
    }

    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }

    else if (a32n == 0) {
        a32.style.background = 'yellow'
        a32n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
}
function Vermelho8() {
    
    a32.style.background = 'red'
    a32n = 1

    //VITÓRIA
    if ((a31n == 1 && a32n == 1 && a33n == 1) || (a12n == 1 && a22n == 1 && a32n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a11n == 0) {       
        //SEGUNDA JOGADA
        if (a31n == 1 && a32n == 1) {
            a33.style.background = 'yellow' 
            a33n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a32n == 1 && a22n == 1) {
            a12.style.background = 'yellow' 
            a12n = 2 
        }
        else if (a12n == 1 && a32n == 1) {
            a22.style.background = 'yellow' 
            a22n = 2 
        }
        else {
            a11.style.background = 'yellow' 
            a11n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a33n == 1 && a32n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }        
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }
    else if (a31n == 0) {
        a31.style.background = 'yellow'
        a31n = 2
    }

    else if (a33n == 0) {
        a33.style.background = 'yellow'
        a33n = 2
    }
    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }

    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
}
function Vermelho9() {
    
    a33.style.background = 'red'
    a33n = 1

    //VITÓRIA
    if ((a31n == 1 && a32n == 1 && a33n == 1) || (a13n == 1 && a23n == 1 && a33n == 1) || (a11n == 1 && a22n == 1 && a33n == 1)) {
        vic.innerHTML = '<p>VOCÊ VENCEU</p>'
    }

    //PRIMEIRA JOGADA
    else if (a11n == 0) {       
        //SEGUNDA JOGADA
        if (a23n == 1 && a33n == 1) {
            a13.style.background = 'yellow' 
            a13n = 2 
        }
        else if (a33n == 1 && a32n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a31n == 1 && a33n == 1) {
            a32.style.background = 'yellow' 
            a32n = 2 
        }
        else if (a13n == 1 && a33n == 1) {
            a23.style.background = 'yellow' 
            a23n = 2 
        }
        else {
            a11.style.background = 'yellow' 
            a11n = 2  
        }
    }
    else if (a13n == 0) {
        //SEGUNDA JOGADA
        if (a32n == 1 && a33n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else if (a11n == 1 && a21n == 1) {
            a31.style.background = 'yellow' 
            a31n = 2 
        }
        else {
            a13.style.background = 'yellow' 
            a13n = 2  
        }
    }
    else if (a31n == 0) {
        a31.style.background = 'yellow'
        a31n = 2
    }

    else if (a22n == 0) {
        a22.style.background = 'yellow'
        a22n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
    else if (a12n == 0) {
        a12.style.background = 'yellow'
        a12n = 2
    }

    else if (a23n == 0) {
        a23.style.background = 'yellow'
        a23n = 2
    }
    else if (a21n == 0) {
        a21.style.background = 'yellow'
        a21n = 2
    }
}
