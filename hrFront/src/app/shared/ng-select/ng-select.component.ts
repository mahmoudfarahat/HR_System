import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss']
})
export class NgSelectComponent implements OnInit {

  @Output() onChange: EventEmitter<any | null> =  new EventEmitter<any | null>();
  @Input() label = ''
  @Input() required = false
  items: any = [];
  itemId! :number
  @Input() url!: string;
  @Input() urlId!: string;
   @Input() control!: FormControl;
  // @Input() control!: AbstractControl;

  @Input('update$') update$ = new Subject<any>();
  @Input() queryParams = ''


  loading = false
  searchText = '';
  start = 0;
  page = 0;
  length = 10;
  scroll = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.getItemById()

    this.getItemsBasedOnOtherItem()


  }

  getItemsBasedOnOtherItem(){

    this.update$.subscribe((items)=>{
      this.loading = false
      this.items= [...items]

      // console.log(this.items)
    })
  }




  getItemById(){
setTimeout(()=>{
 if(this.control.value && this.urlId)
 {
  this.itemId = this.control.value
  this.loading =true
  return this.http
  .get(
    `${environment.BASE_URL}${this.urlId}/${this.itemId}`
  ).subscribe((item :any)=>{

    // console.log(item)
    this.items = [...this.items,item]
    this.control.setValue(item.id)
    this.loading =false
  })
 }else{

        return
 }

},500)


    // this.control.valueChanges.pipe(take(1)).subscribe((value) => {
    //   console.log(value)
    //   this.itemId = value
    //   if(this.itemId){
    //     this.loading =true
    //     return this.http
    //     .get(
    //       `${environment.BASE_URL}${this.urlId}/${this.itemId}`
    //     ).subscribe((item :any)=>{
    //         console.log(item)
    //       // console.log(item)
    //       this.items = [...this.items,item]
    //       this.control.setValue(item.id)
    //       this.loading =false
    //     })
    //   }else{
    //     console.log('failed')
    //     return
    //   }

    // })


  }

  getItems(searchText = '', start = 0, length = 10, scroll?: boolean) {

    this.loading =true
    if(this.url){
      return this.http
      .get(
        `${environment.BASE_URL}${this.url}?length=${length}&start=${start}&search=${searchText}${this.queryParams}`
      )
      .subscribe((items: any) => {
        if (searchText && !scroll) {
          this.items = items;
        } else if (searchText && scroll) {
          this.items = [...this.items, ...items];
        } else if (start) {
          this.items = [...this.items, ...items];
        } else {

          this.items = items;
        }
        this.loading =false
      });
    }else{
      this.loading =false
      return
    }

  }

  onSearch(searchText: string) {
    this.searchText = searchText;
    this.start = 0;
    this.page = 0;
    this.getItems(searchText);
  }

  scrollEnding() {
    this.scroll = true;
    this.page++;
    this.start = this.page * this.length;
    this.getItems(this.searchText, this.start, this.length, this.scroll);
  }

  Change(event:any){
    // console.log(2)
this.onChange.emit(event)
  }

  openSelect() {
    this.getItems();
  }

  onClear() {
    this.control.setValue(0);
  }


}
