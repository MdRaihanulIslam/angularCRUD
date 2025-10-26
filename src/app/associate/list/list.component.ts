import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AssociateService } from '../../_shared/associate.service';
import { associateModel } from '../../../model/associate';
import { Subscription } from 'rxjs';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatTableModule,MatDialogModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit,OnDestroy {
  _list:associateModel[]=[];
  subs = new Subscription();
  displayHeaders = ['id','name','address','cl','status','action'];
  datasource !: MatTableDataSource<associateModel>;
  constructor(private service:AssociateService,private dialog:MatDialog){
    
  }

  GetallList(){
      let _sub = this.service.Getall().subscribe(item=>{
      this._list = item;
      this.datasource = new MatTableDataSource(this._list);
      console.log(_sub);
    })
  }

  ngOnInit():void{
    this.GetallList();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  add(){
    this.openPopUp();
  }

  openPopUp(){
    this.dialog.open(AddComponent,{
      width:'60%',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    })
  }

}
