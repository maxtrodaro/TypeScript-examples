"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Assistir",
    description: "Relembrar",
    completed: false,
};
// todo.completed = true;
function updateTodo(todo, fieldToUpdate) {
    return __assign(__assign({}, todo), fieldToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechar Ghost",
    description: "Abrindo Ghost",
};
console.log(todo3);
var todo4 = {
    title: "Fechar Ghost",
    completed: false,
};
console.log(todo4);
