import { Component } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

constructor(public modal:ModalService){}
  openModal(event:Event){
    event.preventDefault()
    this.modal.toggelmodal('auth')
  }
}
