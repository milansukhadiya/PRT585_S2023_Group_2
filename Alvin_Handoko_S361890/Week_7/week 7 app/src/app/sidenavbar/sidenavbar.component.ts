import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { SideNavToogle } from '../sidenavbar';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',style({opecity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',style({opecity:0}))
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('500ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(1turn)', offset: '1'})
        ]))
      ])
    ])
  ]
})
export class SidenavbarComponent implements OnInit {
  @Output() onToogleSideNav: EventEmitter<SideNavToogle> = new EventEmitter();
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.opened = false;
      this.onToogleSideNav.emit({
        opened: this.opened,
        screenWidth: this.screenWidth,
      });
    }
  }
  navdata = [
    { routerlink: 'students', icon: 'fa fa-user-circle', label: 'Students' },
    { routerlink: 'units', icon: 'fa fa-book', label: 'Units' },
    { routerlink: 'campuses', icon: 'fa fa-university', label: 'Campuses' },
    { routerlink: 'events', icon: 'fa fa-calendar-days', label: 'Events' },
    {
      routerlink: 'classroom',
      icon: 'fa-solid fa-users',
      label: 'Classrooms',
    },
    { routerlink: 'score', icon: 'fa-solid fa-star', label: 'Score' },
  ];
  opened = false;
  screenWidth = 0;
 

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toogleOpened(): void {
    this.opened = !this.opened;
    this.onToogleSideNav.emit({
      opened: this.opened,
      screenWidth: this.screenWidth,
    });
  }

  closeSideNav(): void {
    this.opened = false;
    this.onToogleSideNav.emit({
      opened: this.opened,
      screenWidth: this.screenWidth,
    });
  }
}
