let todoList = [
  {
    id:0,
    todo:'test',
    state:'do'
  },
  {
    id:1,
    todo:'complete test',
    state:'done'
  }
];
let index = 1;
let eidting = false;

// dom 불러온 후 실행되는 이벤트
document.addEventListener("DOMContentLoaded", evt => {
  printList();
});

// 리스트 뿌려주기
const printList = () => {
  const todo_items = document.getElementById('todo-items');
  if ( todoList.length > 0 ){
    // default 리스트 삭제
    todo_items.removeChild(todo_items.getElementsByClassName('todo-item')[0]);

    // todoList 출력
    for(let i=0; i < todoList.length; i++) {
      let addtodo = '<div class="todo-item"><span class="todo-text" data-index='+ todoList[i].id +'>'+todoList[i].todo+'</span><div class="btn-wrap"><span class="edit" id="edit" onclick="todoEdit(this)"></span><span class="remove" id="remove" onclick="todoRemove(this)"></span></div></div>';
      document.getElementById('todo-items').insertAdjacentHTML('afterbegin', addtodo);
      if( todoList[i].state === 'done' ) {
        document.getElementById('edit').remove();
      }
    }
  }
}

// todo 추가
document.getElementById('add').onclick = todoAdd = (e) => {
  e.preventDefault();
  let input_value = document.getElementById('input-text');

  if( input_value.value === '' ) {
    alert('plz input anything');
    input_value.focus();
    return false;
  }

  todoList[index] = {
    id: index+1,
    todo: input_value.value,
    state: 'do'
  }

  let addtodo = '<div class="todo-item"><span class="todo-text" data-index='+ todoList[index].id +'>'+input_value.value+'</span><div class="btn-wrap"><span class="edit" id="edit" onclick="todoEdit(this)"></span><span class="remove" id="remove" onclick="todoRemove(this)"></span></div></div>';
  document.getElementById('todo-items').insertAdjacentHTML('afterbegin', addtodo);

  index++;
  input_value.value = '';
};

const todoEdit = (thiz) => {
  const $this = thiz;
}


const todoRemove = (thiz) => {
  const $this = thiz;
  const parents = $this.parentNode.parentNode;
}