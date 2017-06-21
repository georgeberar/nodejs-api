'use strict';
module.exports = function (app) {
    
    var taskController = require('../controllers/task.controller');
    
 
    app.route('/tasks').get(taskController.getAll);
    app.route('/task').post(taskController.addTask);

};