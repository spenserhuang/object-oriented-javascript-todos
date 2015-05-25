function task(item){
  this.description = item;
  this.completed = false;
  this.id = task.prototype.id;
  task.prototype.id++;
};

task.prototype.id = 1;

task.prototype.complete = function (){
  this.completed = true;
};

task.prototype.remove = function (){
  this.list.remove(this.description);
};


function TodoList(){};

TodoList.prototype.tasks = [];
TodoList.prototype.list = function () {
    for (var i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    };
  };
TodoList.prototype.add = function (item) {
    var new_task = new task(item);
    new_task.list = this;
    this.tasks.push(new_task);
  };
TodoList.prototype.indexOf = function (item) {
    for (i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i]["description"] === item) {
        return i;
      };
    };
    return -1;
  };
TodoList.prototype.remove = function (item) {
    var index = this.indexOf(item);
    this.tasks.splice(index,1);
  };
TodoList.prototype.get = function (index) {
    return this.tasks[index];
  };
TodoList.prototype.complete = function (index) {
    this.tasks[index]["completed"] = true;
  };



// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
