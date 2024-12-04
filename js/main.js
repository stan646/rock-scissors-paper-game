const account = [0];

let computer = "";
let result = "";
let Results = document.getElementById("result");

const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");

const score = {
    win: 0,
    loose: 0,
    draw: 0
};



// a function below work 
function computerRandomly(){

    const randomly = Math.floor(Math.random() * 100);

    if (randomly >= 0 && randomly < 30) {
        computer = `<img src = '2.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`;
    }  else if(randomly >= 30 && randomly < 70){
        computer = `<img src = '3.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`;
    }  else if(randomly >= 70 && randomly < 100){
        computer = `<img src = '1.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`;
    }

}

function rock(){
    computerRandomly();

    if (computer === `<img src = '2.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`) {
        result = "draw";
    } else if(computer === `<img src = '3.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "You win";
    } else if(computer === `<img src = '1.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "You loose";
    }

    if (result === "You win") {
        score.win += 1;
        x1.innerHTML = `Winning: ${score.win}`;
    } else if (result === "You loose"){
        score.loose += 1;
        x3.innerHTML = `Looses: ${score.loose}`;
    } else if(result === "draw"){
        score.draw += 1; 
        x2.innerHTML = `Draw: ${score.draw}`;
    }

    Results.innerHTML = `You pick <span> <b> <img src='2.png' 
    style = 'border-radius: 50%; width: 20px; height: 20px;'> </b> </span> Computer pick
     <span><b>${computer}</b></span>`;

    
   snack();
    
}


function scissors(){
    computerRandomly();

    if (computer === `<img src = '2.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`) {
        result = "You loose";
    } else if(computer === `<img src = '3.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "draw";
    } else if(computer === `<img src = '1.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "You win";
    }

    if (result === "You win") {
        score.win += 1;
        x1.innerHTML = `Winning: ${score.win}`;
    } else if (result === "You loose"){
        score.loose += 1;
        x3.innerHTML = `Looses: ${score.loose}`;
    } else if(result === "draw"){
        score.draw += 1; 
        x2.innerHTML = `Draw: ${score.draw}`;
    }

   
    Results.innerHTML = `You pick <span><b><img src='3.png' 
     style = 'border-radius: 50%; width: 20px; height: 20px;'></b></span> Computer pick
     <span><b>${computer}</b></span>`;
    
   snack();
    
}


function paper(){
    computerRandomly();

    if (computer === `<img src = '2.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`) {
        result = "You win";
    } else if(computer === `<img src = '3.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "You loose";
    } else if(computer === `<img src = '1.png'  style = 'border-radius: 50%; width: 20px; height: 20px;'>`){
        result = "draw";
    }


    if (result === "You win") {
        score.win += 1;
        x1.innerHTML = `Winning: ${score.win}`;
        userdeposit();
    } else if (result === "You loose"){
        score.loose += 1;
        x3.innerHTML = `Looses: ${score.loose} `;
    } else if(result === "draw"){
        score.draw += 1; 
        x2.innerHTML = `Draw: ${score.draw}`;
    }

    Results.innerHTML = `You pick <span><img src='1.png'
    style = 'border-radius: 50%; width: 20px; height: 20px;'></span> Computer pick
     <span><b>${computer}</b></span>`;

   snack();
    
}

const userdeposit = () =>
{
    const user = document.getElementById("user");
    const Uservalue = Number(user.value);
    
    if (Uservalue >= 500) {
        t();
        account.push(Uservalue);
        user.value = '';
        console.log(account);
        
    }
    setTimeout(t1, 3000);
}

function t(){
    document.getElementById("gf").innerHTML = `Transaction proccessing`;
}

function t1(){
    const m = document.getElementById("gf");
    const y = document.getElementById("trial");
    m.innerHTML = `Transaction successful`;
    const total = account.reduce(totalize);
    document.getElementById("blc").innerHTML = `Tsh ${total.toLocaleString()}`;

    if (m.innerHTML === `Transaction successful`) {

        setTimeout(()=>{
            m.style.display = 'none'; 
            y.style.display = 'none';
        },3000);
    }

    let earn1 = 0;

    if (total >= 500 && score.win >= 1) {
        earn1 += 1000;
        alert(`You earn ${earn1}`);
        account.push(earn1);
        const total = account.reduce(totalize);
        document.getElementById("blc").innerHTML = `Tsh ${total.toLocaleString()}`;
        console.log(account);   
    }else if(total < 500 && score.win >= 1){

        alert("hi");

}
}

const deduct = () =>
{
    let total = account.reduce(totalize);
    
        let j = 0;
   for (let index = 0; index < account.length; index++) {
    const element = account[index];
    if (score.loose >= 1) {
        j -= 1000;
        j-=total;
        console.log(element);
        document.getElementById("blc").innerHTML = `Tsh ${total.toLocaleString()}`;
        
    }
    
   }
}


const totalize = (s1,s2) =>
{
    return s1 + s2;
}





const snack = ()=> {
    const x = document.getElementById("result");
    // Add the "show" class to DIV
   x.className = "show";

 // After 3 seconds, remove the show class from DIV
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2500);
}

const snack1 = ()=>{
    const x = document.getElementById("trial");
    const y = document.getElementById("sa");
 

    if (x.classList.toggle("show")) {
        x.style.display = 'block';
        // y.innerHTML = "Done";
        // y.style.backgroundColor = 'red';
    }else{
        x.style.display = 'none';
        // y.innerHTML = "Deposit";
        // y.style.backgroundColor = 'green';
    }
}

const snack2 = () =>
{
    const x = document.getElementById("trial");

    x.style.display = 'none';


}



