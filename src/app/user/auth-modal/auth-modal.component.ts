import { Component, OnDestroy, OnInit } from '@angular/core';
import {  SharedModule } from "../../shared/shared.module";
import { ModalService } from '../../service/modal.service';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-auth-modal',
    standalone: true,
    templateUrl: './auth-modal.component.html',
    styleUrl: './auth-modal.component.css',
    imports: [SharedModule, LoginComponent, RegisterComponent]
})
export class AuthModalComponent implements OnInit,OnDestroy{
constructor(public modal:ModalService){}

ngOnInit(): void {
    this.modal.register('auth')
}
ngOnDestroy(): void {
    this.modal.unregister('auth')
}
}
