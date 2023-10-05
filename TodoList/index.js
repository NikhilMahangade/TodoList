

let btn=document.querySelector('.submit');
let text=document.querySelector('#input');
let body=document.querySelector('body');


btn.addEventListener('click',function(){
    console.log('button click');
    console.log(text.value)
   if(text.value!=""){
        let ul=document.createElement('ul');
        ul.classList.add('ul-list');
        ul.innerText=text.value;
        
        let Remove=document.createElement('button');
        Remove.classList.add("remove");
        Remove.innerText="Delete";
        Remove.addEventListener("click",function(){
            ul.remove('remove')
        })
        ul.append(Remove);
        body.appendChild(ul);
        text.value="";
        
   }
   else{
        alert("Add task")
    }

})



