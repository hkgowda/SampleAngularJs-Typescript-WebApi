class ModalDirective{
    public restrict = "EA";
    public templateUrl = "src/app/views/modalDirective.html";
    public controller = "modalController";
    public controllerAs = "vm";
    // public scope = {
    //     modalHeading: "@",
    //     modalFooter: "=",
    //     modalBody: "="
    // };
}

angular.module("empApp").directive("modalDirective",[()=>new ModalDirective()]);