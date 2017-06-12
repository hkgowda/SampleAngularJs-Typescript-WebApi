var TableDirective = (function () {
    function TableDirective() {
        this.restrict = "EA";
        this.templateUrl = "/src/app/views/tableDirective.html";
        this.controller = "tableController";
        this.controllerAs = "vm";
        //public bindToController = true;
        this.scope = {
            tableData: "=",
            columnHeaders: "=",
            addNew: "&"
        };
    }
    return TableDirective;
}());
angular.module("empApp").directive("tableDirective", [function () { return new TableDirective; }]);
