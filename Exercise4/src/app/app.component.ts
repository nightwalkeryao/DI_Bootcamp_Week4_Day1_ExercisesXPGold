import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { map } from 'rxjs/operators'
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date = new Date()

  obj = {
    type: 'Animal',
    name: 'Derreck',
    color: 'Brown',
    canSpeak: false
  }

  apiData$!: Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.apiData$ = ajax('https://dummyjson.com/users').pipe(
      map(r => {
        let res = r.response;
        return res;
      })
    )
  }
}
