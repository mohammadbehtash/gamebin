import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-modal',

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

@Input()modalID=''

constructor(public modal:ModalService,public elementRef:ElementRef){}

closeModal(){
this.modal.toggelmodal(this.modalID)
}
ngOnInit(): void {
  document.body.appendChild(this.elementRef.nativeElement)
}
}
