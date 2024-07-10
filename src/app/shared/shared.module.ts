import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabComponent } from './tab/tab.component';
import { TabscontainetComponent } from './tabscontainet/tabscontainet.component';



@NgModule({
  declarations: [
    ModalComponent,
     TabComponent,
    TabscontainetComponent],
  imports: [
    CommonModule,
   
  ],
  exports:[
    ModalComponent,
    TabComponent,
    TabscontainetComponent
  ]
})
export class SharedModule { }
