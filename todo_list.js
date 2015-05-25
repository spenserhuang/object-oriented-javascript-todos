var TodoList = function() {

  this.removeFromTasks = function(id) {
    for(i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
         this.tasks.splice(i, 1)
      }
    }
  },

  this.tasks = [],

  this.add = function(item) {
    this.tasks.push( new Task(item, this.tasks.length) )
  },

  this.list = function() {
    for (i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    }
  }

  this.remove = function(index) {
    this.tasks.splice(index, 1);
  }
}

var Task = function(item, id) {
  this.id = id,
  this.description = item,
  this.completed = false,
  this.complete = function() {
     this.completed = true;
  }
}





// Driver code


var todoList = new TodoList();
