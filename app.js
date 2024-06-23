let input = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('.list')
let delBtns = document.querySelectorAll('.delete')
let li = document.querySelectorAll('.li')
let body = document.querySelector('body')
let lightBtn = document.querySelector('#light')
let darkBtn = document.querySelector('#dark')



btn.addEventListener('click', () => {
    let inputValue = input.value;
    if (!inputValue == '') {
        let li = document.createElement('div')
        li.textContent = input.value
        li.setAttribute('class', 'li')
        let span = document.createElement('span')
        let deleteI = document.createElement('i')
        deleteI.classList.add('fa-solid', 'fa-trash')
        deleteI.setAttribute('id', 'delete')
        let checkI = document.createElement('i')
        checkI.classList.add('fa-regular', 'fa-circle-check')
        checkI.setAttribute('id', 'check')
        span.appendChild(checkI)
        span.appendChild(deleteI)
        li.appendChild(span)
        list.appendChild(li)
        input.value = '';
    } else {
        alert('Please write a task first')
    }

})

list.addEventListener('click', (e) => {
    if (e.target.id === 'delete') {
        let parent = e.target.parentElement.parentElement
        parent.remove()

    }
})
list.addEventListener('click', (e) => {
    if (e.target.id === 'check') {
        let parent = e.target.parentElement.parentElement
        parent.classList.remove('li')
        parent.classList.add('li','check-li')
        let btn=e.target
        btn.classList.remove('fa-regular')
        btn.classList.add('fa-solid')

        if (btn.classList[1]=='fa-solid') {
            btn.classList[1]='fa-regular'
        }
        

    }
    
})



lightBtn.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor );
  let  bgColor='#EBF9FF'
    document.body.style.backgroundColor = bgColor

   let h2 = document.querySelector('h2') 
   let h2Color= 'black'
   h2.style.color=h2Color
   let libg='#2e5d7b'

//    let inputBox= document.querySelector('.input-box')
//    inputBox.style.backgroundColor='#2e5d7b'
//    for(li1 of li ){
//     li1.style.backgroundColor=libg
//    }

})
darkBtn.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor );
  let  bgColor='#091D25'
    document.body.style.backgroundColor = bgColor

   let h2 = document.querySelector('h2') 
   let h2Color= 'white'
   h2.style.color=h2Color

})
