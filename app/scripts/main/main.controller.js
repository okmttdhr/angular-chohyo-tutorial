'use strict';

/**
 * @ngdoc function
 * @name angularChohyoTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChohyoTutorialApp
 */
var angularChohyoTutorialController = angular.module('angularChohyoTutorialController', [])

/* 一覧用 */
angularChohyoTutorialController.controller('SheetListController', ['$scope', 'sheets',
  function SheetListController($scope, sheets) {
    $scope.list = sheets.list; // 帳票リストモデル
  }
])

/* 作成用 */
angularChohyoTutorialController.controller('CreationController', ['$scope', 'counting', 'sheetAction',
  function CreationController($scope, counting, sheetAction) {

    angular.extend($scope, sheetAction); // $scope オブジェクトに sheetAction サービスメソッドをミックスイン
    angular.extend($scope, counting); // $scope オブジェクトに counting サービスメソッドをミックスイン

    $scope.integer = /^\d+$/; // 整数にマッチ

    $scope.$watch('lines.length < 2', function (val) {
      // この関数は lines.length < 2 の結果が変わった時だけ呼ばれます
      $scope.disabledDelBtn = val;
    });

    // sheetAction.initialize() をこの形で呼べる。 lines をつくっている。
    // sheetAction.testtest() は例えば以下の様な形で呼べる。
    $scope.initialize();
    $scope.testtest();

  }
]);

/* 詳細用 */
angularChohyoTutorialController.controller('SheetController', ['$scope', '$routeParams', 'sheets', 'counting',
  function SheetController($scope, $params, sheets, counting) {
    angular.extend($scope, sheets.get($params.id)); // $scope オブジェクトを sheet で拡張
    angular.extend($scope, counting); // counting サービスで $scope オブジェクトを拡張
  }
]);
