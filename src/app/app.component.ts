import { Component } from '@angular/core';
import { faTachometerAlt, faStoreAlt, faMoneyCheck,faClipboardCheck,faParachuteBox,faPeopleCarry,faBoxOpen} from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angularbootstrap';
    //icons
    faTachometerAlt = faTachometerAlt;
    faStoreAlt = faStoreAlt; 
    faMoneyCheck = faMoneyCheck;
    faClipboardCheck=faClipboardCheck;
    faParachuteBox=faParachuteBox;
    faPeopleCarry=faPeopleCarry;
    faBoxOpen=faBoxOpen;
    //icon-end
    ngOnInit() {
        //Toggle Click Function
        $("#menu-toggle").click(function (e: { preventDefault: () => void; }) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

}