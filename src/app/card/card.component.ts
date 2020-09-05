import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users: any;

  constructor( private userService: UsersService) { }

  ngOnInit() {
    this.userService.getData().subscribe((data)=>{
      this.users=data;
    })
  }

}
