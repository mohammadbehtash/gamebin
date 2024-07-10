import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import { ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-modal',

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

@Input()modalID=''

constructor(public modal:ModalService,public elementRef:ElementRef,@Inject(PLATFORM_ID) private platformId: Object){}

closeModal(){
this.modal.toggelmodal(this.modalID)
}
ngOnInit(): void {
  if(isPlatformBrowser(this.platformId)){

    document.body.appendChild(this.elementRef.nativeElement)
  }
}
}
