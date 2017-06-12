using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.WebApi.Models
{
    public class EmployeeDetailsModel
    {
        public List<TableColumnModel> ColumnData { get; set; }
        public List<EmployeeModel> RowData { get; set; }
        public EmployeeDetailsModel()
        {
            ColumnData = new List<TableColumnModel>();
            RowData = new List<EmployeeModel>();
        }
    }
}