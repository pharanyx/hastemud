'use strict';

System.register(['aurelia-charts', './data'], function (_export, _context) {
  "use strict";

  var groupBy, fakeData, Demo;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function pieChart() {
    var dimensions = [{
      value: function value(d) {
        return d.sales;
      }
    }];

    return {
      dimensions: dimensions,
      type: 'pie',
      library: 'C3',
      data: groupBy('customer', fakeData).map(function (d) {
        return d.values;
      })
    };
  }

  function barChart() {
    var dimensions = [{
      value: function value(d) {
        return d.sales;
      }
    }];

    dimensions.name = function (d) {
      return d[0].customer + ' ' + d.length + 'h';
    };

    return {
      type: 'bar',
      library: 'C3',
      dimensions: dimensions,
      data: groupBy('customer', fakeData).map(function (d) {
        return d.values;
      })
    };
  }

  function lineChart() {
    var dimensions = [{
      value: function value(d) {
        return d.hour;
      }
    }, {
      value: function value(d) {
        return d.sales;
      }
    }];

    dimensions.name = function (d) {
      return d[0].customer + ' ' + d.length + 'h';
    };

    return {
      type: 'line',
      library: 'C3',
      dimensions: dimensions,
      data: groupBy('customer', fakeData).map(function (d) {
        return d.values;
      })
    };
  }
  return {
    setters: [function (_aureliaCharts) {
      groupBy = _aureliaCharts.groupBy;
    }, function (_data) {
      fakeData = _data.fakeData;
    }],
    execute: function () {
      _export('Demo', Demo = function () {
        function Demo() {
          _classCallCheck(this, Demo);
        }

        Demo.prototype.attached = function attached() {
          this.barChart = barChart();
          this.lineChart = lineChart();
          this.pieChart = pieChart();
        };

        return Demo;
      }());

      _export('Demo', Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvY2hhcnRzL2RlbW8uanMiXSwibmFtZXMiOlsicGllQ2hhcnQiLCJkaW1lbnNpb25zIiwidmFsdWUiLCJkIiwic2FsZXMiLCJ0eXBlIiwibGlicmFyeSIsImRhdGEiLCJncm91cEJ5IiwiZmFrZURhdGEiLCJtYXAiLCJ2YWx1ZXMiLCJiYXJDaGFydCIsIm5hbWUiLCJjdXN0b21lciIsImxlbmd0aCIsImxpbmVDaGFydCIsImhvdXIiLCJEZW1vIiwiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxXQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFFBQU1DLGFBQWEsQ0FBQztBQUNsQkMsYUFBTztBQUFBLGVBQUtDLEVBQUVDLEtBQVA7QUFBQTtBQURXLEtBQUQsQ0FBbkI7O0FBSUEsV0FBTztBQUNMSCxrQkFBWUEsVUFEUDtBQUVMSSxZQUFZLEtBRlA7QUFHTEMsZUFBWSxJQUhQO0FBSUxDLFlBQVlDLFFBQVEsVUFBUixFQUFvQkMsUUFBcEIsRUFBOEJDLEdBQTlCLENBQWtDO0FBQUEsZUFBS1AsRUFBRVEsTUFBUDtBQUFBLE9BQWxDO0FBSlAsS0FBUDtBQU1EOztBQUVELFdBQVNDLFFBQVQsR0FBb0I7QUFDbEIsUUFBTVgsYUFBYSxDQUFDO0FBQ2xCQyxhQUFPO0FBQUEsZUFBS0MsRUFBRUMsS0FBUDtBQUFBO0FBRFcsS0FBRCxDQUFuQjs7QUFJQUgsZUFBV1ksSUFBWCxHQUFrQjtBQUFBLGFBQVFWLEVBQUUsQ0FBRixFQUFLVyxRQUFiLFNBQXlCWCxFQUFFWSxNQUEzQjtBQUFBLEtBQWxCOztBQUVBLFdBQU87QUFDTFYsWUFBWSxLQURQO0FBRUxDLGVBQVksSUFGUDtBQUdMTCxrQkFBWUEsVUFIUDtBQUlMTSxZQUFZQyxRQUFRLFVBQVIsRUFBb0JDLFFBQXBCLEVBQThCQyxHQUE5QixDQUFrQztBQUFBLGVBQUtQLEVBQUVRLE1BQVA7QUFBQSxPQUFsQztBQUpQLEtBQVA7QUFNRDs7QUFFRCxXQUFTSyxTQUFULEdBQXFCO0FBQ25CLFFBQU1mLGFBQWEsQ0FBQztBQUNsQkMsYUFBTztBQUFBLGVBQUtDLEVBQUVjLElBQVA7QUFBQTtBQURXLEtBQUQsRUFFaEI7QUFDRGYsYUFBTztBQUFBLGVBQUtDLEVBQUVDLEtBQVA7QUFBQTtBQUROLEtBRmdCLENBQW5COztBQU1BSCxlQUFXWSxJQUFYLEdBQWtCO0FBQUEsYUFBUVYsRUFBRSxDQUFGLEVBQUtXLFFBQWIsU0FBeUJYLEVBQUVZLE1BQTNCO0FBQUEsS0FBbEI7O0FBRUEsV0FBTztBQUNMVixZQUFZLE1BRFA7QUFFTEMsZUFBWSxJQUZQO0FBR0xMLGtCQUFZQSxVQUhQO0FBSUxNLFlBQVlDLFFBQVEsVUFBUixFQUFvQkMsUUFBcEIsRUFBOEJDLEdBQTlCLENBQWtDO0FBQUEsZUFBS1AsRUFBRVEsTUFBUDtBQUFBLE9BQWxDO0FBSlAsS0FBUDtBQU1EOzs7QUF2RE9ILGEsa0JBQUFBLE87O0FBQ0FDLGMsU0FBQUEsUTs7O3NCQUVLUyxJOzs7Ozt1QkFFWEMsUSx1QkFBVztBQUNULGVBQUtQLFFBQUwsR0FBZ0JBLFVBQWhCO0FBQ0EsZUFBS0ksU0FBTCxHQUFpQkEsV0FBakI7QUFDQSxlQUFLaEIsUUFBTCxHQUFnQkEsVUFBaEI7QUFDRCxTIiwiZmlsZSI6InBhZ2UvY2hhcnRzL2RlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
