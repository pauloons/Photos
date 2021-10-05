import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Photo} from "../photo/photo";
import {debounceTime} from "rxjs/operators";
import {Subject} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

 photos: Photo[] = [];
 filter:string[] = [];
  debounce:Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
