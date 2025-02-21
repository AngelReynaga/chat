import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput]
})
export class LogInPage implements OnInit {
  @ViewChild('emailInput', { static: false }) emailInput!: IonInput;
  @ViewChild('passwordInput', { static: false }) passwordInput!: IonInput;

  constructor() { }

  ngOnInit() {
  }

  login()
  {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    if (!email || !password) {
      alert('Por favor rellene ambos campos');
      return;
    }
  }
}
