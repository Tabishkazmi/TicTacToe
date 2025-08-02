let boxes = document.querySelectorAll(".box");
let ResetBtn=document.querySelector(".reset");
let turnO= true; //playerX, playerO
let newGameBtn=document.querySelector("#NG");
let msgCont=document.querySelector(".message");
let msg = document.querySelector("#msg");

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgCont.classList.add("hide");    
}  

const Draw = () =>{
    msg.innerText ="The game is draw";
    msgCont.classList.remove("hide");
    DisableBtn();
}

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        count++;
        if(turnO)
        {
           box.innerText="X";
           box.classList.add("X")
           turnO=false;
        }
        else
        {
            box.innerText="O";
            box.classList.add("O");
            turnO=true;
        }
        if(count===9)
        {
             Draw();
             count=0;
        }
        box.disabled=true;
        checkWinner();
    })
}
)
const DisableBtn = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText= "";
    }
};
const showWinner = (winner) =>{
    msg.innerText=`The player ${winner} Won`;
    msgCont.classList.remove("hide");
    DisableBtn();
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let posValue1=boxes[pattern[0]].innerText;
        let posValue2=boxes[pattern[1]].innerText;
        let posValue3=boxes[pattern[2]].innerText;
        if(posValue1!="" && posValue2!="" && posValue3!="")
        {
            if(posValue1===posValue2 && posValue2===posValue3)
            {
                console.log(`Winner ${posValue1}`);
                showWinner(posValue1);
            }
                
        }
    }

};

newGameBtn.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);




