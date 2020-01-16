import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  Todo: ${title} with ID ${id} is ${completed}.
`);
};
/////////////////////////////////////////////////////////////////////////////////////
const today = new Date();
today.getDay();

const person = {
  age: 20
};
person.age = 30;

class Color {}
const red = new Color();
