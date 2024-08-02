let numDivs=50;
const padWidth=960;

let trigger = "mouseenter";
let eraseDiv=false;
let btn=document.querySelector("#grid");
let btn2=document.querySelector("#event");
let btn3=document.querySelector("#EraseGr");

let container=document.querySelector(".container");
container.style.height=`${padWidth}px`;
container.style.width=`${padWidth}px`;


createGrid(numDivs,trigger);

btn.addEventListener("click",()=>{
    removeGrid();
    numDivs=prompt("Enter no of sqs per row and col: ");
    console.log(numDivs);
    createGrid(numDivs,trigger);
});
btn2.addEventListener("click",()=>{
    removeGrid();
    let t = prompt("enter 1)click  2)Mouseenter : ");
    if(t==1)
    {
        trigger="click";
    }
    else
    { 
        trigger="mouseenter"

    }
    createGrid(numDivs, trigger);
});
btn3.addEventListener("click",()=>{
    removeGrid();
    createGrid(numDivs, trigger);


});

function removeGrid()
{
    container.innerHTML = '';
}

function createGrid(numDiv,trig)
{
    console.log(numDiv);
    let width=padWidth/numDiv;
    for(let i=0;i<numDiv;i++)
    {
        let div=document.createElement("div");
        div.style.display="flex";
        div.style.flexDirection="column";
        for(let j=0;j<numDiv;j++)
        {
            let cDiv=document.createElement("div");
            cDiv.style.display="flex";
            cDiv.style.height=`${width}px`;
            cDiv.style.width=`${width}px`;
            // cDiv.style.backgroundColor= `rgb(${((i+10)*10%255)},${(j*10)%255},${((i+j)*10)%255})`;
            cDiv.addEventListener(`${trig}`,()=>{ (eraseDiv)?cDiv.style.backgroundColor="white":cDiv.style.backgroundColor="black" });
            div.appendChild(cDiv);
    
    
        }
        div.style.flexWrap="true";
        container.appendChild(div);
    
    }
}
//
