interface IEmployeeService {
    getEmployeeData(): any;
    addNewEmployee(any);
}

class EmployeeService implements IEmployeeService {

    private static $inject = ["$http"];

    constructor(private $http: ng.IHttpService) {}

    baseUrl: string = "http://localhost:51043/api/v1/";

    getEmployeeData = (): any => {
        let url: string = this.baseUrl+"employee/getEmployeeDetails";

        return this.$http.get(url)
            .then(response => {
                return response.data;
            }).catch((response) => {
                return response;
            });
    }

    addNewEmployee = (employee: any) => {
        console.log(employee);
        let url: string = this.baseUrl+"employee/PostNewEmployee";
        this.$http.put(url, employee);
        //     .then(response => {
        //         debugger;
        //         return response.data;
        //     }).catch((response)=>{
        //         return response;
        //     });
        //this.employee.push(employee);
    }
}

angular.module("empApp").factory("employeeService", ["$http", ($http) => new EmployeeService($http)]);