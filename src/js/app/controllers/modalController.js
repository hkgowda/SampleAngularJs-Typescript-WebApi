var ModalController = (function () {
    //public static $inject = ["$uibModalInstance"];
    function ModalController($uibModalInstance, employeeService, columnHeaders) {
        var _this = this;
        this.$uibModalInstance = $uibModalInstance;
        this.employeeService = employeeService;
        this.columnHeaders = columnHeaders;
        this.employee = {};
        this.onSave = function () {
            _this.employeeService.addNewEmployee(_this.employee);
            _this.$uibModalInstance.close();
        };
        this.onCancel = function () {
            _this.$uibModalInstance.dismiss("cancel");
        };
    }
    return ModalController;
}());
angular.module("empApp").controller("modalController", ModalController);
