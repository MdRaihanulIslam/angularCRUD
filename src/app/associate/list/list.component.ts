import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AssociateService } from '../../_shared/associate.service';
import { associateModel } from '../../../model/associate';
import { Subscription } from 'rxjs';

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
  displayHeaders = ['id','name','address'];
  datasource !: MatTableDataSource<associateModel>;
  constructor(private service:AssociateService){
    
  }

  GetallList(){
      let _sub = this.service.Getall().subscribe(item=>{
      this._list = item;
      this.datasource = new MatTableDataSource(this._list);
    })
  }

  ngOnInit():void{
    this.GetallList();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
