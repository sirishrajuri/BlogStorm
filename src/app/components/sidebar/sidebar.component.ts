import { Component, ElementRef, OnInit,HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent   implements OnInit {
  currentRoute!: string;
  settingsMenu = false;
  constructor(private route: ActivatedRoute,private afAuth: AngularFireAuth, private authService: AuthService,private elementRef: ElementRef) {}

  ngOnInit() {
    this.route.url.subscribe((event) => {
      if(event[0]) {
        this.currentRoute =event[0].path
        console.log(this.currentRoute)
      }else  {
        this.currentRoute =''
        console.log(this.currentRoute)
      }
     
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.settingsMenu = false;
    }
  }


  logout() {
    this.authService.logout()
  }

  

  toggleSettingsMenu() {
    this.settingsMenu = !this.settingsMenu;
  }
}


