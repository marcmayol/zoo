import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {GLOBAL} from './globals';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal) {
    let params = JSON.stringify(animal);
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.post<any>(this.url + '\/animal', params, requestOptions).pipe(map(res => res));
  }

  getAnimals() {
    return this.http.get(this.url + '\/animals').pipe(map(res => res));
  }

  getAnimal(id) {
    return this.http.get(this.url + '\/animal\/' + id).pipe(map(res => res));
  }

  editAnimal(token, id, animal) {
    let params = JSON.stringify(animal);
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.put(this.url + '/animal/' + id, params, requestOptions).pipe(map(res => res));

  }

  deleteAnimal(token, id) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    };
    let requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.delete(this.url + '/animal/' + id, requestOptions).pipe(map(res => res));

  }
}

