var EmployeeService = (function () {
    function EmployeeService($http) {
        var _this = this;
        this.$http = $http;
        this.baseUrl = "http://localhost:51043/api/v1/";
        this.getEmployeeData = function () {
            var url = _this.baseUrl + "employee/getEmployeeDetails";
            return _this.$http.get(url)
                .then(function (response) {
                return response.data;
            }).catch(function (response) {
                return response;
            });
        };
        this.addNewEmployee = function (employee) {
            console.log(employee);
            var url = _this.baseUrl + "employee/PostNewEmployee";
            _this.$http.put(url, employee);
            //     .then(response => {
            //         debugger;
            //         return response.data;
            //     }).catch((response)=>{
            //         return response;
            //     });
            //this.employee.push(employee);
        };
    }
    return EmployeeService;
}());
EmployeeService.$inject = ["$http"];
angular.module("empApp").factory("employeeService", ["$http", function ($http) { return new EmployeeService($http); }]);
