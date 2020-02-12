import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Suchen',
            url: '/search',
            icon: 'assets/icon_menu_search.svg'
        },
        {
            title: 'Scannen',
            url: '/scan',
            icon: 'assets/icon_menu_scan.svg'
        },
        {
            title: 'Produkt anzeigen',
            url: '/productdetail/4017100370007',
            icon: 'assets/icon_menu_product.svg'
        },
        {
            title: 'Einstellungen',
            url: '/settings',
            icon: 'assets/icon_menu_settings.svg'
        },
        {
            title: 'Abmelden',
            url: '/signout',
            icon: 'assets/icon_menu_logoff.svg'
        },
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

}
