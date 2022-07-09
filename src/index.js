import './style.css';
import completed from './status';

const grab = (e, isId = false, qAll = false) => {
  if (isId) {
    return document.getElementById(e);
  } if (qAll) {
    return document.querySelectorAll(`.${e}`);
  }
  return document.querySelector(`.${e}`);
};

function cv3(n) {
  const elements = [];
  n.forEach((e) => {
    const parts = e.split('.');
    const el = parts[0];
    const classes = parts[1];
    const element = document.createElement(el);
    element.className = classes;
    elements.push(element);
  });
  return elements;
}

const todo = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: Array.length,
  },
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
];

if (localStorage.getItem('collection') === null) {
  localStorage.setItem('collection', JSON.stringify(todo));
}

const work = JSON.parse(localStorage.getItem('collection'));

work.forEach((e, i) => {
  const elements = cv3([
    'li.li',
    'div.box',
    'input',
    'div',
    'span.txt',
    'div.del',
    'span.material-icons btn delete',
  ]);

  elements[2].type = 'checkbox';
  elements[2].checked = work[i].completed;

  elements[2].addEventListener('change', () => completed(work, i));

  elements[6].innerText = 'delete';
  elements[4].innerText = work[i].description;
  elements[1].appendChild(elements[2]);
  elements[3].appendChild(elements[4]);
  elements[5].appendChild(elements[6]);

  elements[0].appendChild(elements[1]);
  elements[0].appendChild(elements[3]);
  elements[0].appendChild(elements[5]);

  grab('todo-list', true).appendChild(elements[0]);
});
