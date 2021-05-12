import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  showEdit : boolean = false;
  data : any;
  public collection : any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=> {
      this.collection = result;
      console.log(this.collection);
    });
  }

  delete(rest : any){
    this.commonService.deleteResto(rest.id).subscribe((result) => {
      alert("Delete Successfull");
      window.location.reload();
    })
  }

  edit(rest : any){
    this.showEdit = true;
    this.data = rest;
    console.log(rest);
  }

  getData(){
    return this.data;
  }

  close(){
    this.showEdit = false;
  }
}
