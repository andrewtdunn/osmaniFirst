var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title', 'order', and 'complted' attributes.

app.Todo = Backbone.Model.extend({

	// Default attributes ensure that each todo created has a 'title' and
	// 'completed' attributes.

	defaults: {
		title: "",
		completed: false
	},

	// Toggle the 'completed' state of this todo item.
	toggle: function() {
		this.save({
			completed: !this.get('completed');
		});
	}
});