"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
        this._name = "";
        this._surname = "";
        this._message = "";
        this._nick = "";
    }
    Object.defineProperty(HelloWorld.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (new_name) {
            this._name = new_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelloWorld.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (new_surname) {
            this._surname = new_surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelloWorld.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (new_message) {
            this._message = new_message;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelloWorld.prototype, "nick", {
        get: function () {
            return this._nick;
        },
        set: function (new_nick) {
            this._nick = new_nick;
        },
        enumerable: false,
        configurable: true
    });
    HelloWorld.prototype.sayHello = function () {
        console.log("\n        ".concat(this.message, " ").concat(this.name, " ").concat(this.surname, "\n        "));
    };
    return HelloWorld;
}());
var hello = new HelloWorld();
hello.message = "Hola mundo, en especial a ti";
hello.name = "Denisa";
hello.surname = "Belean";
hello.nick = "deni";
hello.sayHello();
//# sourceMappingURL=main.js.map