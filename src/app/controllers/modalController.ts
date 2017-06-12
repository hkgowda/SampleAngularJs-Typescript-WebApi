class ModalController {

    employee: any = {};
    
    //public static $inject = ["$uibModalInstance"];
    constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
        private employeeService: IEmployeeService, private columnHeaders
    ) { }

    onSave = () => {
        this.employeeService.addNewEmployee(this.employee);
        this.$uibModalInstance.close();
    }

    onCancel = () => {
        this.$uibModalInstance.dismiss("cancel");
    }

}

angular.module("empApp").controller("modalController", ModalController);