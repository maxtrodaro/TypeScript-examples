type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Assistir",
  description: "Relembrar",
  completed: false,
};

// todo.completed = true;

function updateTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick

type TodoPreview = Pick<Todo, "title" | "description">;

const todo3: TodoPreview = {
  title: "Fechar Ghost",
  description: "Abrindo Ghost",
};

console.log(todo3);

// Omit

type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  title: "Fechar Ghost",
  completed: false,
};

console.log(todo4);
