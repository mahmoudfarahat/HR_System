import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType, SortType } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit {

  @ViewChild('table', { static: false }) table!: DatatableComponent;
  @ViewChild('tableContainer', { static: false }) tableContainer!: ElementRef;

@Input() data:any
@Input() columns!: {}[ ]
@Input() apiType!:string
@Input()dataId :any
refreshTrigger: boolean = false;

@Input() apiUrl  = environment.BASE_URL

   constructor(private http:HttpClient , private changeDetectorRef: ChangeDetectorRef) {}




  ngOnInit(): void {

    this.getData()
  }

  ngOnChanges(changes: any): void {
    //i want to try to use changes without
console.log(changes.data.currentValue)
if(changes.data.currentValue.data){
  this.page.count = changes.data.currentValue.recordsFiltered ;
  this.page.loadingIndicator = false;
  this.rows = [];
  for (const iterator of changes.data.currentValue.data) {
     this.rows.push(iterator);
  }
}


  //    this.url = new URL(`${environment.BASE_URL}${this.apiType}`)
  //   this.http.get<any>(this.url.href).subscribe(a=>{
  //     this.page.count = a.recordsFiltered;
  //     this.page.loadingIndicator = false;
  //     this.rows = [];
  //     for (const iterator of a.data) {
  //        this.rows.push(iterator);
  //     }
  //  });
  }


  getData(){
console.log(this.data)
        this.rows =this.data.data;
        this.page.count = this.data.recordsFiltered;
        this.page.loadingIndicator = false;
  }

  columnMode:ColumnMode = ColumnMode.force;
  sortType:SortType = SortType.single;
  selection:SelectionType = SelectionType.single;


    isLoading = true;
    isShown = true;
    searchBar:string = "";

    rows:any[] = [];
    page = {
     limit: 10,
     count: 0,
     offset: 0,
     pageSize: 10,
     loadingIndicator:false,
     propety:"",
     assending:false
    }


  search(input:HTMLInputElement){
    console.log(1)
    let url = new URL(`${this.apiUrl}${this.apiType}`)
    this.searchBar = input.value;
  if(this.searchBar){
    url.searchParams.append("search",this.searchBar);
  }

      this.http.get<any>(url.href).subscribe(a=>{
        this.page.count = a.recordsFiltered;
        this.page.loadingIndicator = false;
        this.rows = [];
        for (const iterator of a.data) {
           this.rows.push(iterator);
        }
     });
  }


  get filteredColumn() :any[]{
    return this.columns.filter((a:any)=> a.checked);
  }


  ClickPage(d:any){
    console.log(d ,d.offset * d.limit)
   let url = new URL(`${this.apiUrl}${this.apiType}`)
    url.searchParams.append("start",(d.offset * d.limit).toString());
    url.searchParams.append("length",(d.limit).toString());
    this.http.get<any>(url.href).subscribe(a=>{
    this.page.count = a.recordsFiltered;
    this.page.loadingIndicator = false;
    this.rows = [];
      for (const iterator of a.data) {
         this.rows.push(iterator);
      }
   });
  }

  sortData(data:any){
    this.page.propety = data.sorts[0].prop;
    this.page.assending = data.sorts[0].dir == 'asc' ? true :false
    let url = new URL(`${this.apiUrl}${this.apiType}`)
     url.searchParams.append("propety",this.page.propety);
     url.searchParams.append("assending",this.page.assending.toString());

     this.http.get<any>(url.href).subscribe(a=>{
       this.page.count = a.recordsFiltered;
       this.page.loadingIndicator = false;
       this.rows = [];
       for (const iterator of a.data) {
          this.rows.push(iterator);
       }
    });
   }



}
