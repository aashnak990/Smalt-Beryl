import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users: any;
  closeResult=''

  constructor( private userService: UsersService,
                private modalService: NgbModal) { }

//modal service for details                
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
//modal service for enroll
  rise(content12) {
    this.modalService.open(content12, {ariaLabelledBy: 'modal-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  ngOnInit() {
    this.userService.getData().subscribe((data)=>{
      this.users=data;
    })
  }
 
}

