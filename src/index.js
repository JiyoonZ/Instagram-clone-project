import Nav from './modules/nav/Nav.js';
import Gallery from './modules/gallery/gallery.js';
import Bio from './modules/bio/Bio.js';


const App = () => {

  return `
    ${Nav()}
    <div class="container">
    ${Bio()}
    ${Gallery()}
    </div>
  `
}
document.getElementById('root').innerHTML = App();

const todos = database.createObjectStore('todos', {autoIncrement: true});

function addTodos() {
		
		const todo = {
						title: "todo1",
						text: "no.1 thing todo"
		}
    //todos ObjectStore 에 readwrite(읽기,쓰기)권한으로 Transaction 시작하기
    // 여기서의 todos는 objectStore
    const transaction = database.transaction("todos", 'readwrite')

    //objectStore() 함수로 todos 테이블 선택
    // 여기서의 todos는 'todos'라는 objectStore의 'todos'라는 테이블을 의미 
    const todos = transaction.objectStore("todos")
    //원하는 객체 (todo) 를 테이블에 추가
    todos.add(todo)
}

const lv = 2;
function lv2() {

  const lv = 3;
}