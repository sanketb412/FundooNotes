import { Component, OnInit, Input} from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.css']
})
export class DisplaynoteComponent implements OnInit {

  @Input() notes: any;

  updateData: any

  colorData:string=''

  changeText: boolean;

  constructor(private dialog: MatDialog) { 
    this.changeText = false;
  }
 
  ngOnInit(): void {
    // console.log(this.data.data.notes);  
  }
 
  receiveToUpdate=($colorData:string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData) 
  }
  
  openAddDialog(updateData: any) {
    this.updateData = updateData
    this.dialog.open(UpdatenoteComponent, {data : {note: updateData} });
  }
  
}