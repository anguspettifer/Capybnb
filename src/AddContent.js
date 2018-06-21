'use strict';

function AddContent() {
  this.description = {};
  this.title = {};
  this.startdate = {};
};

AddContent.prototype.addDescription = function (description) {
  this.description = description;
};

AddContent.prototype.getDescription = function () {
  return this.description;
};

AddContent.prototype.addTitle = function (title) {
  this.title = title;
};

AddContent.prototype.getTitle = function () {
  return this.title;
};

AddContent.prototype.getDate = function () {
  this.startdate = startdate;
};

AddContent.prototype.addDate = function () {
  return this.startdate;
};
