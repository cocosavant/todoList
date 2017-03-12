// - it should store the todos array on an object
var todoList = {
  todos: [], // empty array
  // - it should have an addTodo method
  addTodo: function(todoText) {
    this.todos.push({ // object rather than just text
      todoText: todoText,
      completed: false
    });
  },
  // - it should have a changeTodo method
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  // - it should have a deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (totalTodos === completedTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// create a list item every time an item is added.
// place new item text into the li

var view = {
  displayTodos: function() {
    // target UL
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    // want to go through the list 
    // if there is an item, then append it to ul within li
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      
      // find current todoList.todos[i] /assin variable for ease
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      // need to add todo completion if logic
      if(todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.todoText; 
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};