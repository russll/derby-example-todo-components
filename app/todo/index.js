/**
 * Created by ruslan on 10.06.14.
 */

function FileContent() {}

module.exports = FileContent;

FileContent.prototype.view = __dirname;

FileContent.prototype.init = function(){
    var model = this.model;
//    model.setNull("data.file", {});
}
FileContent.prototype.create = function(){
    var model = this.model;
}
FileContent.prototype.delTodo = function(todoId) {
    this.model.root.del('todos.' + todoId);
};

