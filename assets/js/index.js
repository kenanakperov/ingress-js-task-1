// ! task 1

let a = 5
let b = 6
let c = {b,a}
console.log(c)

// ! task 2

function carModel(model){
    return model
}

function carYear(year){
    return year
}

function fuelEconomy(economy){
    return economy
}

function fuelTank(tank){
    return tank
}

function carData(){
    let result =`
    Maşının modeli:  ${carModel("Mercedes-Benz AMG GT63s")} 
    Maşının ili:  ${carYear(2021)} 
    Yanacaq sərfiyyatı 100 km-də:  ${fuelEconomy(20)}L 
    Yanacaq çəninin tutumu:  ${fuelTank(60)}L`
    console.log(result)
}
function road(){
    let yol = `    Gedilen yol:  ${fuelTank(60)/fuelEconomy(20)*100}km`
    console.log(yol)
}
carData()
road()

// ! Task 3 

let login = "kenan"

let pass = "kenan2004"

let userName = prompt("Adınızı daxil edin")

let password = prompt("Şifrənizi daxil edin")

console.log(userName,password) 

if(login==userName,
    pass==password){
        alert("Giriş uğurlu oldu!")
    }
    else{
        alert("Adınız və ya şifrəniz yanlışdır!")
    }