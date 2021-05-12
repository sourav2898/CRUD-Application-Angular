import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService{
  URL = "http://localhost:3000/restro";

  constructor(private _http:HttpClient){}

  getRestoList(){
    return this._http.get(this.URL);
  }
  addResto(data: object){
    return this._http.post(this.URL, data);
  }
  deleteResto(id : any){
    return this._http.delete(`${this.URL}/${id}`);
  }
  updateResto(data : object, id: any){
    return this._http.put(`${this.URL}/${id}`,data);
  }
  getCurrentData(id : any){
    return this._http.get(`${this.URL}/${id}`);
  }

}
