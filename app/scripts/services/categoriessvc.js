'use strict';

/**
 * @ngdoc service
 * @name stockmanagerApp.CategoriesSvc
 * @description
 * # CategoriesSvc
 * Service in the stockmanagerApp.
 */
angular.module('stockmanagerApp')
  .service('categoriesService', function () {

    this.loadCategories = function() {
      console.log('Loading categories');
      return [
            {'id':'category1','name':'Category 1'},
            {'id':'category2','name':'Category 2'}
          ];
    };
  });
