const hintbox= document.querySelector('.hintBox');
const hintnumbers= document.querySelectorAll('.partNumbers');
const placements=document.querySelectorAll('.placementBoxs');
const placed=document.querySelectorAll('.placedBoxs');
let i=0;

placements.forEach(e=>{
    e.setAttribute('style',`top:${Math.floor(Math.random() * 200) + 1}px; left:${Math.floor(Math.random() * 200) + 1}px;`)
    e.addEventListener('click',()=>{
        e.style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 0, 0.5)";
        e.classList.add('selected');
        console.log(e.classList);
        placed.forEach(f=>{
            f.addEventListener('click',()=>{
                f.classList.add(e.classList[0]);
                e.classList.remove(e.classList[0]);
                console.log(f.classList);
                if(e.classList.contains("selected")){
                    e.style.display='none';
                };
                check();
            });
        });
    });
});

function check(){
if(Array.from(placements).every(e=> e.style.display=== 'none')){
    checkForCount();
};};

function checkForCount(){
if(document.querySelector('.rightOne').classList.contains('leftpieceOne')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightTwo').classList.contains('leftpieceTwo')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightThree').classList.contains('leftpieceThree')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightFour').classList.contains('leftpieceFour')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightFive').classList.contains('leftpieceFive')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightSix').classList.contains('leftpieceSix')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightSeven').classList.contains('leftpieceSeven')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightEight').classList.contains('leftpieceEight')){
    i++;
    console.log('Correct');
};
if(document.querySelector('.rightNine').classList.contains('leftpieceNine')){
    i++;
    console.log('Correct');
};
if(i==9){
    document.querySelector('.congrateBox').style.display='inline-block';
};
};

hintbox.style.backgroundColor= 'red';
    hintbox.addEventListener('click', ()=>{
        if(hintbox.style.backgroundColor === 'red'){
            hintbox.style.backgroundColor = 'white';
            hintbox.style.color= 'black';
            console.log('Açıldı');
            hintnumbers.forEach(e=>{
                e.style.display= 'inline-block';
            });
        }
        else{
            console.log('Kapandı');
            hintbox.style.backgroundColor= 'red';
            hintbox.style.color= 'white';
            hintnumbers.forEach(e=>{
                e.style.display= 'none';
            });
        }
    });