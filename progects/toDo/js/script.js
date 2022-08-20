const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoRemove = document.querySelector('.todo-remove')
const todoComplited = document.querySelector('.todo-completed')

const toDoData = []

const render = function(){
   todoList.innerHTML = ''
   todoComplited.innerHTML = ''
 
   toDoData.forEach(function (item, i) {
        const li = document.createElement('li') 

        li.classList.add('todo-item')
        
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if(item.completed){
            todoComplited.append(li)
        }else {
            todoList.append(li)
        }
        
        li.querySelector('.todo-complete').addEventListener('click', function(){
            item.completed = !item.completed
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function(){
            const todo = document.querySelectorAll('.todo-item')
            todo[i].remove()
            toDoData.splice(i, 1)
            render()
        })
    })
    localStorage.setItem('toDoData', JSON.stringify(toDoData))
}

const getLocalStorage = function () {
    let todoDataLocal = JSON.parse(localStorage.getItem('toDoData'))
    toDoData.push(...todoDataLocal)
    render()
}

todoControl.addEventListener('submit', function(event){
    event.preventDefault()

    if (headerInput.value != ''){
        let newToDo = {
            text: headerInput.value,
            completed: false
        }
        toDoData.push(newToDo)
        headerInput.value = ''
        render()  
    }
    

    
})

getLocalStorage()




