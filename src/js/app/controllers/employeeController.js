var EmployeeController = (function () {
    //public static $inject = ["$location"];
    //public static $inject = ["$uibModal"];
    function EmployeeController(employeeService, $location, $uibModal, $q) {
        var _this = this;
        this.employeeService = employeeService;
        this.$location = $location;
        this.$uibModal = $uibModal;
        this.$q = $q;
        this.employees = [];
        this.columnHeaders = [];
        this.employee = {};
        this.deferred = this.$q.defer();
        this.getEmployeeData = function () {
            _this.employeeService.getEmployeeData().then(function (data) {
                _this.employees = data.RowData;
                _this.columnHeaders = data.ColumnData;
            });
        };
        this.openModal = function () {
            var options = {
                templateUrl: "src/app/views/modalDirective.html",
                controller: "modalController as vm",
                animation: true,
                size: "md",
                backdrop: "static",
                resolve: {
                    columnHeaders: function () {
                        return _this.columnHeaders;
                    }
                }
            };
            _this.$uibModal.open(options);
        };
        this.addNewEmployee = function () {
            _this.$location.path("/employeeDetails");
        };
        this.getEmployeeData();
    }
    return EmployeeController;
}());
angular.module("empApp").controller("employeeController", EmployeeController);
