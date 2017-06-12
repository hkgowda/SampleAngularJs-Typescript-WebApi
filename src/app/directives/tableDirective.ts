class TableDirective{
    public restrict = "EA";
    public templateUrl = "/src/app/views/tableDirective.html";
    public controller = "tableController";
    public controllerAs = "vm";
    //public bindToController = true;
    public scope = {
        tableData : "=",
        columnHeaders : "=",
        addNew: "&"
    };
}

angular.module("empApp").directive("tableDirective",[ () => new TableDirective]);
