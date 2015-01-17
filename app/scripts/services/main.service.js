'use strict';

var angularChohyoTutorialService = angular.module('angularChohyoTutorialService', [])

angularChohyoTutorialService.service('sheets', [function () {
  this.list = []; // 帳票リスト

  // 明細行リストを受け取り新しい帳票を作成して帳票リストに加える
  this.add = function (lines) {
    this.list.push({
      id: String(this.list.length + 1),
      createdAt: Date.now(),
      lines: lines
    });
  };

  // 任意の id を持った帳票を返す
  this.get = function (id) {
    var list = this.list;
    var index = list.length;
    var sheet;

    while (index--) {
      sheet = list[index];
      if (sheet.id === id) {
        return sheet;
      }
    }
    return null;
  };
}]);

angularChohyoTutorialService.service('counting', function () {

  // 引数から小計を計算して返す
  this.getSubtotal = function (orderLine) {
    return orderLine.unitPrice * orderLine.count;
  };

  // リストから合計金額を計算して返す
  this.getTotalAmount = function (lines) {
    var self = this;
    var totalAmount = 0;

    angular.forEach(lines, function (orderLine) {
      totalAmount += self.getSubtotal(orderLine);
    });

    return totalAmount;
  };
});

angularChohyoTutorialService.service('sheetAction', ['$location', 'sheets',
  function ($location, sheets) {

    // 新しい明細行を作成する
    function createOrderLine() {
      return {
        productName: '',
        unitPrice: 0,
        count: 0
      };
    }

    // リストモデルを初期化する
    this.initialize = function () {
      this.lines = [createOrderLine()];
    };

    // リストモデルに新しい明細行を追加する
    this.addLine = function () {
      this.lines.push(createOrderLine());
    };

    // 任意の明細行をリストモデルから取り除く
    this.removeLine = function (target) {
      var lines = this.lines;
      var index = lines.indexOf(target);

      if (index !==  -1) {
        lines.splice(index, 1);
      }
    };

    // リストモデルから帳票モデルを作成して保存
    this.save = function () {
      sheets.add(this.lines);
      $location.path('/');
    };
  }
])
