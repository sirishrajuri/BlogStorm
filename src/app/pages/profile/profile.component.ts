import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'test',
    email: 'test123@gmail.com',
    username: '',
    bio: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  constructor(private authService : AuthService) { 
    
    console.log("sasd "+ JSON.stringify(authService.userData));
  }

  saveChanges() {
    // Implement your save logic here
  }

}
