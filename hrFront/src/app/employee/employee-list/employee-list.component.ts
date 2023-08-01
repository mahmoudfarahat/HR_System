import { EmployeeService } from './../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees:any
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe((employees)=>{
      this.employees = employees
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
}
