import renderItems from './status';
import store from './drag';

const form = document.getElementById('add-todo');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = form.elements[0].value;
  store.addTodo(description);
  form.elements[0].value = '';
});
window.addEventListener('load', () => {
  document.getElementById('clear-btn').addEventListener('click', () => {
    store.clearCompleted();
  });

  const STORE_KEY = 'localstorage/todos';

  store.onUpdate(() => {
    renderItems(store.todos);
  });
  store.onUpdate(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(store.todos));
  });
  const saved = localStorage.getItem(STORE_KEY);
  store.loadTodos(saved ? JSON.parse(saved) : []);
});