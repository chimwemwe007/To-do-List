import './style.css';

const grab = (e, isId = false, qAll = false) => {
  if (isId) {
    return document.getElementById(e);
  } if (qAll) {
    return document.querySelectorAll(`.${e}`);
  }
  return document.querySelector(`.${e}`);
};

const todo = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
];

todo.forEach((e) => {
  const template = document.createElement('template');
  template.innerHTML = `<li>
        <div class="box"> <input type="checkbox" checked="${e.completed}"> </div>
        <div> <span>${e.description}</span> </div>
         <div class="del"><span type="button" class="material-icons btn delete">delete</span></div>
         </li>`;
  grab('todo-list', true).appendChild(template.content.firstChild);
});