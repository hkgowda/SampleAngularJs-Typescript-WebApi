class EmployeeController{

    employees:any[] = [];
    columnHeaders:any[] = [];
    employee={};
    //public static $inject = ["$location"];
    //public static $inject = ["$uibModal"];

    constructor(private employeeService:IEmployeeService, private $location:ng.route.IRouteParamsService,
    private $uibModal:ng.ui.bootstrap.IModalService,
    private $q:ng.IQService){
        this.getEmployeeData();
    }

    deferred = this.$q.defer(); 

    getEmployeeData = () => {
        this.employeeService.getEmployeeData().then((data)=>{
            this.employees = data.RowData;
            this.columnHeaders = data.ColumnData;
        });
    }

    openModal = () => {
        let options = {
            templateUrl: "src/app/views/modalDirective.html",
            controller: "modalController as vm",
            animation: true,
            size:"md",
            backdrop: "static",
            resolve:{
                columnHeaders:()=>{
                    return this.columnHeaders;
                }
            }
        };
        this.$uibModal.open(options)
    }



    addNewEmployee = () => {
        this.$location.path("/employeeDetails");
    }
}

angular.module("empApp").controller("employeeController",EmployeeController);