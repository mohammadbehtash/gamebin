import { Injectable } from '@angular/core';

interface IModal {
  id: String,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

private modal:IModal[]=[]
  constructor() { }

  register(id:string){
    this.modal.push({id,visible:false})
  }
unregister(id:string){
  this.modal=this.modal.filter(el=>el.id===id)
  
}

  isModalOpen(id:string):boolean |undefined{
    return this.modal.find(el=>el.id===id)?.visible
  }

  toggelmodal(id:string) {
 const modal= this.modal.find(el=>el.id===id)
  if(modal){
    modal.visible=!modal.visible
  }
}
}
