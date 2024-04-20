import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {
  firestore = inject(Firestore);
  memberCollection = collection(this.firestore, 'member');


  addMember(email: string, name: string) {
    const memberDetail = {email, name};
    const promise = addDoc(this.memberCollection, memberDetail).then(
      (response) => console.log(response)
    )
  }
}
