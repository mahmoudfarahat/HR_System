import { Component, OnInit } from '@angular/core';

class Row {
  id! :number
  row?:Row[]
  insiderows?:Insiderows[]
}

class Insiderows{
  search! :String
  insiderows?:Insiderows[]
}
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  ngOnInit(): void {
    
  }

  lastAssignedId: number = 0;
  rows: Row[] = [this.createRowWithInput()]; // Initialize with a Row with an input

  createRowWithInput(): Row {
    const newRow = new Row();
    newRow.id = ++this.lastAssignedId;
    newRow.row = [];
    newRow.insiderows = [this.createInsiderowsWithInput()]; // Add an Insiderows object with an input
    return newRow;
  }

  createInsiderowsWithInput(): Insiderows {
    const newInsiderow = new Insiderows();
    newInsiderow.search = ""; // Initialize the search input with an empty string
    return newInsiderow;
  }

  addNew() {
    this.rows.push(this.createRowWithInput()); // Add a new Row with an input
  }

  addChildNew(parentRow: Row) {
    if (!parentRow.row) {
      parentRow.row = [this.createRowWithInput()];
    } else {
      parentRow.row.push(this.createRowWithInput());
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
}
