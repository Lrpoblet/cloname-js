// Envolvemos el componente AngularJS en una IIFE, para eliminar las variables del scope global
var vector = (function() {

  // Usamos modo estricto (nuevo in ECMA5): http://www.w3schools.com/js/js_strict.asp
  'use strict';

  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }


  Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  };

  Vector.prototype.minus = function(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  };

  Vector.prototype.escalar = function(other) {
    return this.x * other.x + this.y * other.y;
  };

  Vector.prototype.toString = function() {
    return "v(" + this.x + ", " + this.y + ")";
  };



  Object.defineProperty(Vector.prototype, "length", {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  });


  return  Vector;

})();
