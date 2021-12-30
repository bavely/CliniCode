import { Component, OnInit, Renderer2, ViewChild, ElementRef, Directive } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthenticationService } from '../../authentication.service'
import {NotificationsService} from '../../services/notifications.service'
import { Note } from '../../Interface/note';
import * as CryptoJS from 'crypto-js'; 

var misc:any ={
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
}
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public enclist = [];
    public declist = [];
    @ViewChild("navbar-cmp") button;

    constructor(location:Location, private renderer : Renderer2, private element : ElementRef,private auth: AuthenticationService, private router: Router,private notifi:NotificationsService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){

        
        let s = this.notifi.GetUsersList(); 
      
        s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
          this.enclist = [];
          this.declist = [];
          data.forEach(item => {
            let a = item.payload.toJSON(); 
            a['$key'] = item.key;
            this.enclist.push(a as Note);
          })
          console.log(this.enclist)
          this.enclist.forEach( n =>{

            let b = {
                email: CryptoJS.AES.decrypt(n.email, "userid").toString(CryptoJS.enc.Utf8),
                name : CryptoJS.AES.decrypt(n.name, "userid").toString(CryptoJS.enc.Utf8),
                type : CryptoJS.AES.decrypt(n.type, "userid").toString(CryptoJS.enc.Utf8),
            }

            this.declist.push(b as Note);
        })
        console.log(this.declist)
        })


// ----------------------------------------------------------------------------//

        this.listTitles = ROUTES.filter(listTitle => listTitle);

        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if($('body').hasClass('sidebar-mini')){
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;

            }else{
                setTimeout(function(){
                    $('body').addClass('sidebar-mini');

                    misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });
    }

    isMobileMenu(){
        if($(window).width() < 991){
            return false;
        }
        return true;
    }

    sidebarOpen(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        },500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose(){
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    sidebarToggle(){
        if(this.sidebarVisible == false){
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        for (let i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            } else if (this.listTitles[i].type === "sub") {
                for (let j = 0; j < this.listTitles[i].children.length; j++) {
                    let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }

    getPath(){
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
    Onlogout() {
        this.auth.logout()
        this.router.navigateByUrl('/')
       
      }
}
