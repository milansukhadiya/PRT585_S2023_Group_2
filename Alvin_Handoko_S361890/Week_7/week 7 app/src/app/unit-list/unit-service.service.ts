import { Inject, Injectable } from '@angular/core';
import { Unit } from '../unit';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UnitServiceService {
  // private url="localhost:7246/api/unit"
  // unitList: UnitList[] = []
  constructor(private http: HttpClient) { }
  
  getUnits(){
    return this.http.get<Unit[]>('https://localhost:7246/api/Unit',{ withCredentials: true })
  };
  postUnit(unitList: Unit){
    return this.http.post('https://localhost:7246/api/Unit',unitList, { withCredentials: true })
  }
  putUnit(unitList: Unit){
    return this.http.put('https://localhost:7246/api/Unit/update',unitList, { withCredentials: true })
  }
  deleteUnit(UnitId: number){
    return this.http.delete('https://localhost:7246/api/Unit/'+UnitId,{withCredentials: true })
  }
}
