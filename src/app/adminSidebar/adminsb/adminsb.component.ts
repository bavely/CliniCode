import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { userInfo } from 'os';
import {AuthenticationService, UserInfo} from '../../authentication.service'
declare var $:any;
//Metadata
let userType = localStorage.getItem('userType');
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
let pagesChildren = [
    {path: 'user', title: 'My Profile', ab:'UP'},
    {path: 'PatientsSearch', title: 'Add Patient', ab:'AP'},
    // {path: 'register', title: 'Register Page', ab:'RP'},
    {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
    //,{path: 'addPrescription', title: 'add prescreption', ab:'UP'}
]
if(userType == '2') pagesChildren.push ( {path: 'addPrescription', title: 'add prescreption', ab:'UP'})
let MYROUTES: RouteInfo[] = [

    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'pe-7s-graph'
    },
    {
      path: '/admin',
      title: 'Register New User',
      type: 'link',
      icontype: 'pe-7s-id'
    },
    {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'pe-7s-date'
    },
    {
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'pe-7s-gift',
        children: pagesChildren
    }
];

export const ROUTES = MYROUTES ;
@Component({
  selector: 'app-adminsb',
  templateUrl: './adminsb.component.html',
  styleUrls: ['./adminsb.component.css']
})
export class AdminsbComponent  {
  public username
  public menuItems: any[];
  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

  

  constructor(private auth: AuthenticationService){
    console.log(this.auth.UserData)

}
  ngOnInit() {
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.username = localStorage.getItem('username')
      isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows){
         // if we are on windows OS we activate the perfectScrollbar function
         $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
         $('html').addClass('perfect-scrollbar-on');
     } else {
         $('html').addClass('perfect-scrollbar-off');
     }
  }
  ngAfterViewInit(){
      var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

      var collapseId = $sidebarParent.siblings('a').attr("href");

      $(collapseId).collapse("show");
  }

}
