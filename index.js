let items = [];

function toggle() {
    var bg = document.querySelector(".div1");
    bg.classList.toggle("active");
    var AddBox = document.querySelector("#popup");
    AddBox.classList.toggle("active");
}
let flag ;
function toggles(acc) {
    if( acc !== false)
    {
        let ele = Number(acc.parentNode.parentNode.id);
        let bg = document.querySelector(".div1");
        bg.classList.toggle("active");
        let AddBox = document.querySelector("#popdown");
        AddBox.classList.toggle("active");
        flag = ele;
    }
    else
    {
        let bg = document.querySelector(".div1");
        bg.classList.toggle("active");
        let AddBox = document.querySelector("#popdown");
        AddBox.classList.toggle("active");
    }
}

function add()
{
    const inputField = document.querySelector('#inputField').value;
    if(inputField !== "")
    {
        let set = {
            title : inputField,
            id : Date.now()
        }
        items.push(set);
        console.log(items);
        const no = document.querySelector('#no');
        no.style.display = 'none';
    }
   
    toggle();
    randomCard();
}

function randomCard(){
    let use = document.createElement('div');
    let container = document.querySelector('.container');
    use.setAttribute('class' , 'element');
    for(let p =0; p < items.length; p++){
        let grab = items[p];
        use.setAttribute('id' , grab.id);
        use.innerHTML = `<h1 id="pargh"> ${grab.title} </h1>
                         <hr>
                         <div class="text-para"></div><br>
                         <div id="btnAdd">
                         <button onclick="removecard(this)"><i class="fas fa-trash-alt" id="dlt"></i></button>
                         <button onclick="toggles(this)"><i class="fas fa-plus-circle" id="ad"></i></button>
                         </div>`;
        container.appendChild(use);
    }
}

function add1(){
    let text1 = document.querySelector('#text1').value;
    let container = document.querySelector('.container').children;
    for(let q = 0; q < items.length; q++){
        let see = container[q];
        let chng = see.children[2];
        let find = items[q];
        if(find.id === flag){
            if(text1 !== ""){
                var mark = document.createElement('div');
                mark.setAttribute('class' , 'mark');
                mark.setAttribute('id' , flag+1);
                mark.innerHTML=`<h3 id="card2">${text1}</h3>
                                <h3 id="md" onclick="markDone(this)">Mark Done</h3>`;
                chng.appendChild(mark);
            }
        }
     
    }
    toggles(false);
}

function markDone(done){
    let chng = done.parentNode;
    let see = done.parentNode.children[0];
    let choose = done.parentNode.children[1];
    const n = Number(chng.id) - 1;
    for(let s = 0; s < items.length; s++){
        let assume = items[s];
        if(assume.id === n){
            choose.style.display = 'none';
            see.style.color = 'red';
            see.style.textDecoration = 'line-through';
            see.style.textDecorationColor = 'red';
        }
    }
}
function removecard(uses){
    let cross = uses.parentNode.parentNode;
    const unq = Number(uses.parentNode.parentNode.id);
    for(let r = 0; r < items.length; r++){
        let assume = items[r];
        if(assume.id === unq){
            items.splice(r , 1);
            break;
        }
    }
    cross.remove(cross);
    if(items.length == 0){
      const no = document.querySelector('#no');
      no.style.display = 'block';
    }
}

