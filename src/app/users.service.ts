import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    getUsers() {
        return this.http.get(url: 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
           /* .map(function(response) {
                return response.json();
            }) */
    }

    users = [
        {name: 'WFM 1'},
        {name: 'WFM 2'},
        {name: 'WFM 3'},
        {name: 'WFM 4'},
        {name: 'WFM 5'},
        {name: 'WFM 6'},
        {name: 'WFM 7'},
        {name: 'WFM 8'}
      ]
}