import { Component, Inject, NgModule, inject } from '@angular/core';
import { WaitlistService } from '../../service/waitlist.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.css'
})
export class WaitlistComponent {
  waitlistService = inject(WaitlistService);
  email: string = '';
  name: string = '';
  introText: string = '';


  joinWaitlist(){
    this.waitlistService.addMember(this.email,this.name)
  }

}
