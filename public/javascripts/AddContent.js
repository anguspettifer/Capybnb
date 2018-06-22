'use strict';

function AddContent() {
  this.description = {};
  this.title = {};
  this.email = {};
  this.startDate = {};
  this.endDate = {};
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


AddContent.prototype.addEmail = function (email) {
  this.email = email;
};

AddContent.prototype.getEmail = function () {
  return this.email;
};

AddContent.prototype.addStartDate = function (startDate) {
  this.startDate = startDate;
};

AddContent.prototype.getStartDate = function () {
  return this.startDate;
};

AddContent.prototype.addEndDate = function (endDate) {
  this.endDate = endDate;
};

AddContent.prototype.getEndDate = function () {
  return this.endDate;
};
