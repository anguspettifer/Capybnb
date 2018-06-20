'use strict';

function AddContent() {
  this.description = {}
};

AddContent.prototype.addDescription = function (description) {
  this.description = description;
};

AddContent.prototype.getDescription = function () {
  return this.description;
};
