let dataAttuale = new Date()
console.log(dataAttuale)
    
function print1(){
    let dataAttuale1 = new Date()
    let data = dataAttuale1.toLocaleDateString('it-IT')
    document.getElementById("seeDate1").innerHTML = data
    document.getElementById('stile1').style.backgroundColor = 'blue'
    document.getElementById('stile1').style.color = 'white'
}

function print2(){
    let oraAttuale = new Date()
    let ora = oraAttuale.toLocaleTimeString('it-IT')
    document.getElementById("seetime").innerHTML = ora
    document.getElementById('stile2').style.backgroundColor = 'red'
    document.getElementById('stile2').style.color = 'white'
}


function print3(){
    let dataAttuale2 = new Date()
    let data2 = dataAttuale2.toLocaleString('it-IT')
    document.getElementById("seeDate2").innerHTML = data2
    document.getElementById('stile3').style.backgroundColor = 'green'
    document.getElementById('stile3').style.color = 'white'
}

function print4(){
    let dataAttuale3 = new Date()
    document.getElementById("seeDate3").innerHTML = dataAttuale3
    document.getElementById('stile4').style.backgroundColor = 'brown'
    document.getElementById('stile4').style.color = 'white'
}


/*let hour = new Date().getHours()
let afternoon = 'Good Afternoon'
let evening = 'Good Eveninig'

if (hour < 18){
    afternoon
}else{
    evening
}
function click(){
    
document.getElementById('click1').innerHTML = hour
}*/