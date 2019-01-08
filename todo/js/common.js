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
// let index = 0;
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
      let addtodo = '<div class="todo-item"><span class="todo-text" onclick="handleState('+todoList[i].id+', this);" data-index='+ todoList[i].id +'>'+todoList[i].todo+'</span><div class="btn-wrap"><span class="edit" id="edit" onclick="eidtClick(this)"></span><span class="remove" id="remove" onclick="todoRemove(this)"></span></div></div>';
      document.getElementById('todo-items').insertAdjacentHTML('afterbegin', addtodo);
      if( todoList[i].state === 'done' ) {
        document.getElementById('edit').remove();
        document.getElementsByClassName('todo-text')[0].classList.add('done');
      }
    }
  }
}

// todo 추가
document.getElementById('add').onclick = todoAdd = (e) => {
  e.preventDefault();
  let input_value = document.getElementById('input-text');
  const todo_items = document.getElementById('todo-items');
  
  if ( todoList.length == 0 ){
    // default 리스트 삭제
    todo_items.removeChild(todo_items.getElementsByClassName('todo-item')[0]);
  }

  if( input_value.value === '' ) {
    alert('plz input anything');
    input_value.focus();
    return false;
  }

  index++;

  todoList[index] = {
    id: index,
    todo: input_value.value,
    state: 'do'
  }

  let addtodo = '<div class="todo-item">'+
                '<span class="todo-text" onclick="handleState('+todoList[index].id+', this);" data-index='+ todoList[index].id +'>'+input_value.value+'</span>'+
                '<div class="btn-wrap">'+
                '<span class="edit" id="edit" onclick="eidtClick(this)"></span>'+
                '<span class="remove" id="remove" onclick="todoRemove(this)"></span>'+
                '</div>'+
                '</div>';
  document.getElementById('todo-items').insertAdjacentHTML('afterbegin', addtodo);

  input_value.value = '';
};

// todo edit 버튼 클릭
const eidtClick = (thiz) => {
  const $this = thiz;
  const $thisText = $this.parentNode.previousSibling;
  const $thisIndex = $thisText.getAttribute('data-index');
  const beforeText = $thisText.innerHTML;
  const editbox = '<div class="input-row"><input type="text" value="'+beforeText+'" id="input-edit-text" placeholder="what do U wanna change?"><button type="submit" id="editSubmit">EDIT</button></div>'
  const beforeonclcik = $thisText.getAttribute('onclick');
  
  todoList[$thisIndex].state = 'editing';
  $this.style.display='none';
  $thisText.innerHTML = editbox;
  
  document.getElementById('editSubmit').onclick = todoEdit = (e) => {
    e.preventDefault();
    let input_value = document.getElementById('input-edit-text');

    $thisText.setAttribute('onclick', '');
    todoList[$thisIndex].todo = input_value.value;
    todoList[$thisIndex].state = 'do';
    $thisText.innerHTML = todoList[$thisIndex].todo;
    $this.style.display='inline-block';
    setTimeout(() => {
      $thisText.setAttribute('onclick', beforeonclcik);
    }, 0.5);
  }
}

// todo 제거
const todoRemove = (thiz) => {
  const $this = thiz;
  const $thisText = $this.parentNode.previousSibling;
  const $thisIndex = $thisText.getAttribute('data-index');
  const todo_item = $this.parentNode.parentNode;
  
  todoList = todoList.filter(function(value, index, arr){
    return value.id != $thisIndex;
  })
  todo_item.remove();
}

// todo 완료
function handleState(id, thiz) {
  if( todoList[id].state == 'editing' ){
    return false;
  }else if( todoList[id].state == 'do' ){
    todoList[id].state = 'done';
    thiz.classList.add('done');
  }else if( todoList[id].state == 'done' ){
    todoList[id].state = 'do';
    thiz.classList.remove('done');
  }

  if ( thiz.nextSibling.children[0].getAttribute('id') == 'edit'){
    thiz.nextSibling.children[0].remove();
  }else {
    var addedit = '<span class="edit" id="edit" onclick="eidtClick(this)"></span>';
    thiz.nextElementSibling.insertAdjacentHTML('afterbegin', addedit);
  }
}