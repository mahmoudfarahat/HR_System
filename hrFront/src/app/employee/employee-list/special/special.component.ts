import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

class Row {
  id!: number;
  row?: Row[];
  insiderows?: Insiderows[];
  index?: number; // New property for storing index
  query:string = ''
generateQuery(): void {

  this.query = this.insiderows ? this.insiderows.map(innerRow => innerRow.getCombinedSearch()).join(' || ') : '';

  let samelevelChild = this.row?.map(a=> {
    return "("+a.query +")"
  }).join("||")

  // console.log(samelevelChild)

  if(samelevelChild){
    this.query =   "("+this.query+")" +"||"+ "("  +samelevelChild+")"
  }

}
}

class Insiderows {
  search!: string;
  option!:any
  item!:any
  insiderows?: Insiderows[];
  getCombinedSearch(): string {
    let combinedSearch = this.search;
    if (this.insiderows) {
      combinedSearch += ' || ' + this.insiderows.map(innerRow => innerRow.getCombinedSearch()).join(' || ');
    }
    return combinedSearch;
  }

}

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SpecialComponent implements OnInit {
  ngOnInit(): void {}


  lastAssignedId: number = 0;

  rows: Row[] = [this.createRowWithInput(1)]; // Initialize with a Row with an input, starting index from 1



  createRowWithInput(index: number): Row {
    const newRow = new Row();
    newRow.id = ++this.lastAssignedId;
    newRow.row = [];
    newRow.insiderows = [this.createInsiderowsWithInput()];
    newRow.index = index; // Set the index for the current row
    return newRow;
  }

  createInsiderowsWithInput(): Insiderows {
    const newInsiderow = new Insiderows();
    newInsiderow.search = ""; // Initialize the search input with an empty string
    return newInsiderow;
  }

  addNew() {
    this.rows.push(this.createRowWithInput(this.rows.length + 1)); // Add a new Row with an input, increment index by 1
  }

  addChildNew(parentRow: Row) {
    const index = parentRow.row ? parentRow.row.length + 1 : 1; // Calculate index based on current row count
    if (!parentRow.row) {
      parentRow.row = [this.createRowWithInput(index)];
    } else {
      parentRow.row.push(this.createRowWithInput(index));
    }
  }

  addInput(row: Row) {
    if (!row.insiderows) {
      row.insiderows = [this.createInsiderowsWithInput()];
    } else {
      row.insiderows.push(this.createInsiderowsWithInput());
    }
  }

  addNestedInput(childRow: Row) {
    if (!childRow.insiderows) {
      childRow.insiderows = [this.createInsiderowsWithInput()];
    } else {
      childRow.insiderows.push(this.createInsiderowsWithInput());
    }
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
  deleteRow(parent:any,child:any){
    console.log(parent,child)
    console.log(this.rows[parent].insiderows![child] )
    this.rows[parent].insiderows?.splice(child,1)
  }
 
  /////////////////////////

  options = ['Contains', 'equal', 'is Null' , 'Not Null']
  selectedOption:any
}
