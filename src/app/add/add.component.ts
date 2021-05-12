import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert:boolean  = false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
  }

  add(){
    this.commonService.addResto(this.addRestaurant.value).subscribe((res) => {
      console.log(res);
      this.alert = true;
      this.addRestaurant = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        address: new FormControl(''),
      })
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
