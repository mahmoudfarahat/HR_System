import { EmployeeService } from './../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {





/*

rows = [
  {
insiderows:[{

}]
}
]


*/








  /////////////////////////////////////
  employees:any
  //   conditions:any[]= [{}]

  //  selectedItems :string[] = [];
  //  selectedOptions : string[] = [];
  // search: string[] = [];
  //   conditionStrings :string[]= [];
   items:any




   linkQuery= '( a=> a.Name == "Mahmoud" || a => a.Name == "Ali" ) || (  (a=> a.Name == "Mahmoud" || a => a.Name == "Ali" )  || (a=> a.Name == "Mahmoud" || a => a.Name == "Ali" ) )'



   apply(){

  }
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()



  }

  // addCondition(){
  //   this.conditions.push({})
  // }

  // addNewCondition(){

  // }

//  and(){
//   for(let i = 0; i < this.conditions.length; i++) {
//     // access ngModel values
//     const item = this.selectedItems[i];
//     const option = this.selectedOptions[i];

//     // construct string
//     if(option == "Contains")
//     {
//       this.conditionStrings[i] = `a.${item}.Contains("${this.search[i]}")`;

//     }
//     if(option == "equal")
//     {
//       this.conditionStrings[i] = `a.${item} == "${this.search[i]}"`;

//     }
//     if(option == 'is Null')
//     {
//       this.conditionStrings[i] = `a.${item} == "" `;

//     }
//     if(option == 'Not Null')
//     {
//       this.conditionStrings[i] = `a.${item} != "" `;

//     }



//   }

//    let condition =  this.conditionStrings.join(' && ')

// console.log(condition);
//  }

//   or(){
//     for(let i = 0; i < this.conditions.length; i++) {
//       // access ngModel values
//       const item = this.selectedItems[i];
//       const option = this.selectedOptions[i];

//       // construct string
//       if(option == "Contains")
//       {
//         this.conditionStrings[i] = `a.${item}.Contains("${this.search[i]}")`;

//       }
//       if(option == "equal")
//       {
//         this.conditionStrings[i] = `a.${item} == "${this.search[i]}"`;

//       }

//     }

//      let condition =  this.conditionStrings.join(' || ')

// console.log(condition);
//   }










  //////////////////////////////////////////////////////
  getEmployees(){
    this.employeeService.getEmployees().subscribe((employees:any)=>{
      this.employees = employees

      this.items= Object.keys(employees.data[0])

    })
  }


   columns:{}[]= [
    {
      name:"Code",
      sortable: false,
      key:"code",
      type:"function",
      checked:true,
      hasFunction:false,
      clickFunction:(data:any)=>{
        // const modalConfig = {
        //   data: data,
        //   ...this.ngbModalOptions
        // };
// this.vesselId = data
//         console.log(data)
//           this.modalService.open(this.vesselsModal,this.ngbModalOptions);

        // this.modalService.open(VesselsEditComponent , this.ngbModalOptions);

                   }

    },
    {
      name:"Name",
      sortable: false,
      key:"name",
      type:"string",
      checked:true,
      hasFunction:false,

    },
    {
      name:"Email",
      sortable: false,
      key:"email",
      type:"string",
      checked:true,
      hasFunction:false,

    },
    {
      name:"Hire Date",
      sortable: false,
      key:"hireDate",
      type:"date",
      checked:true,
      hasFunction:false,

    },
    {
      name:"Mobile Phone",
      sortable: false,
      key:"mobilePhone",
      type:"string",
      checked:true,
      hasFunction:false,

    },
    {
      name:"Action",
      sortable: false,
      type:"action",
      checked:true,
      hasFunction:false,
      clickFunction:(data:any)=>{
        Swal.fire({
          title: 'Confirmation',
          text: 'Are you sure you want to delete this vessel?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: 'green',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // User confirmed the deletion
            this.performDelete(data);
          }
        });



                   }

    },

  ]

  performDelete(data: any) {
    // this.vesselsService.deleteVessel(data).subscribe(
    //   () => {

    //      this.refreshTable();
    //     Swal.fire('Deleted!', 'This vessel has been deleted successfully', 'success');
    //   },
    //   (error: any) => {
    //     Swal.fire('Error!', 'This vessel   can\'t be deleted because it is related to other tables', 'error');
    //   }
    // );
  }
  //  bigConditions = [
  //   {
  //    order:1,
  //    type:'or',
  //    partentRows:[{
  //     selectedItems:2,
  //     selectedOptions:1,
  //     search:2
  //    },
  //    {
  //     selectedItems:2,
  //     selectedOptions:1,
  //     search:2
  //    },
  //   ],
  //   childRows:[]
  //   },
  //   {
  //     order:2,
  //     type:'or',
  //     rows:[{
  //      selectedItems:2,
  //      selectedOptions:1,
  //      search:2
  //     },
  //     {
  //      selectedItems:2,
  //      selectedOptions:1,
  //      search:2
  //     },
  //    ]
  //    ,  childRows:[
  //     {
  //       order:2,
  //       type:'or',
  //       rows:[{
  //        selectedItems:2,
  //        selectedOptions:1,
  //        search:2
  //       },
  //       {
  //        selectedItems:2,
  //        selectedOptions:1,
  //        search:2
  //       },
  //      ]
  //      ,childRows:[]
  //     }
  //    ]
  //    }



  // ]

}
