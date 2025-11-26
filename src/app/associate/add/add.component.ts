import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AssociateService } from '../../_shared/associate.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatInputModule,MatCheckboxModule,ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit,OnDestroy {

  _form!:FormGroup;

  constructor(private service:AssociateService,private builder:FormBuilder){
    
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy():void{

  }
}
