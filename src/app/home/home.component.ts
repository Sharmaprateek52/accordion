import { Component, OnInit } from '@angular/core';
import { Input, Output} from '@angular/core';
import { Home } from '../model/home';
import { HomeService } from '../services/home.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  accords: Home[];
  opened = false;

  constructor(private homeService: HomeService) {
    this.accords = [];
  }

  ngOnInit():void {
    this.homeService.getAccord().subscribe((res: Home[]) => {
      console.log(res);
      this.accords = res;
    });
  }
}
