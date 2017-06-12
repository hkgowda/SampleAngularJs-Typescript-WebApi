var ModalDirective = (function () {
    function ModalDirective() {
        this.restrict = "EA";
        this.templateUrl = "src/app/views/modalDirective.html";
        this.controller = "modalController";
        this.controllerAs = "vm";
        // public scope = {
        //     modalHeading: "@",
        //     modalFooter: "=",
        //     modalBody: "="
        // };
    }
    return ModalDirective;
}());
angular.module("empApp").directive("modalDirective", [function () { return new ModalDirective(); }]);
