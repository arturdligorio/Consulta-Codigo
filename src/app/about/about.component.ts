import { Component, OnInit } from '@angular/core';
import { Timeline_item, Timeline_node } from 'src/app/model/timeline-item.model';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService:AboutService) { }

  ngOnInit() {
  }

  addNode(time:string, title:string, body:string){
   this.aboutService.addNode(time,title,body)
  }

}
