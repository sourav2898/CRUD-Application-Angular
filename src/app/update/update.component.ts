import { Component, Input, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean  = false;
  data: any;
  updateRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  constructor(private commonService: CommonService, private router:ActivatedRoute, private list:ListComponent) { }

  ngOnInit(): void {
    this.data = this.list.getData();
    this.updateRestaurant = new FormGroup({
      name: new FormControl(this.data.name),
      email: new FormControl(this.data.email),
      address: new FormControl(this.data.address)
    })
  }

  update(){
    this.commonService.updateResto(this.updateRestaurant.value,this.data.id).subscribe((res) => {
      console.log(res);
      this.alert = true;
    })
  }

  closeAlert(){
    this.alert = false;
    window.location.reload();
  }

  close(){
    this.list.close();
  }

}
