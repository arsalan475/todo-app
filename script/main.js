let inp = document.getElementById('input');

let addBtn = document.querySelector('.add-btn');
let todosContainer = document.querySelector('.todos-container')
let counter = -1;

function addTodos() {

  if (inp.value !== '') {
  counter++
    

}

let todo =  ` <div class="todos">
<input type="text" class="todos-input-field" id='n${counter}' value='${inp.value}'disabled />
<div class="todos-btns">
  <a class="todos-btn edit" id='n${counter}'>edit</a>
  <a class="todos-btn remove">remove</a>
</div>
</div>`
    

    if (inp.value !== '') {
        todosContainer.insertAdjacentHTML('afterbegin', todo)
      
        inp.value = ''

    }
}


addBtn.addEventListener('click',addTodos)


todosContainer.addEventListener('click', function (e) {
 
console.log(e.target)
  if (e.target.classList.contains('edit') && e.target.textContent === 'edit') {
    e.target.closest('.todos').firstElementChild.removeAttribute('disabled')
    e.target.textContent = 'save'
    e.target.closest('.todos').firstElementChild.focus();
    e.target.classList.add('save')
  } else if (e.target.classList.contains('save') && e.target.textContent === 'save') {
    if (e.target.closest('.todos').firstElementChild.value !== "") {
      e.target.closest('.todos').firstElementChild.disabled = true;

      e.target.textContent = 'edit'
    } else {
      e.target.closest('.todos').firstElementChild.value='Please write something or delete this'
    }
  }
  
  
  if (e.target.classList.contains('remove') ) {
    e.target.closest('.todos').remove()
  }
})



inp.removeAttribute('disabled')