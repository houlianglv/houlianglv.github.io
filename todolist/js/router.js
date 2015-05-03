//render template 'todos' defined in index.html
Todos.Router.map(function() {
  this.resource('todos', {
    path: '/'
  }, function() {
    this.route('active');
    this.route('completed');
  });
});

// '/' route
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
// '/index' route
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});
// '/active' route
Todos.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {
      controller: controller
    });
  }
});
// '/completed' route
Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {
      controller: controller
    });
  }
});
