class TableController{
    products:any[];
    sortingColumn:string = "productName";
    reverseSort:boolean =false;
    selectedData:number[] = [];
    data:any[] = [];

   getSortingData = (columnName:string)=>{
        this.sortingColumn = columnName;       
        this.reverseSort = !this.reverseSort; 
    }

    getCheckedId = (id:number) => {
        let idx = this.selectedData.indexOf(id);//indexOf(id);
        if (this.selectedData.indexOf(id) > -1) {
            this.selectedData.splice(idx, 1);
        }
        else {
            this.selectedData.push(id);
        }
    }
}

angular.module('empApp').controller('tableController',TableController);