var TableController = (function () {
    function TableController() {
        var _this = this;
        this.sortingColumn = "productName";
        this.reverseSort = false;
        this.selectedData = [];
        this.data = [];
        this.getSortingData = function (columnName) {
            _this.sortingColumn = columnName;
            _this.reverseSort = !_this.reverseSort;
        };
        this.getCheckedId = function (id) {
            var idx = _this.selectedData.indexOf(id); //indexOf(id);
            if (_this.selectedData.indexOf(id) > -1) {
                _this.selectedData.splice(idx, 1);
            }
            else {
                _this.selectedData.push(id);
            }
        };
    }
    return TableController;
}());
angular.module('empApp').controller('tableController', TableController);
