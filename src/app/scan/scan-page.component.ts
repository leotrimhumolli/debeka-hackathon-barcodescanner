import {Component, OnInit} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {from} from 'rxjs';
import {Router} from '@angular/router';
import {BarcodeScanResult} from '@ionic-native/barcode-scanner';

@Component({
    selector: 'app-list',
    templateUrl: 'scan-page.component.html',
    styleUrls: ['scan-page.component.scss']
})
export class ScanPage implements OnInit {

    barcode: number;

    ngOnInit(): void {
    }

    constructor(public barcodeScanner: BarcodeScanner, private router: Router) {
    }

    scan() {
        this.barcodeScanner.scan().then((barcodeData: BarcodeScanResult) => {
            this.barcode = parseInt(barcodeData.text, 10);
            this.router.navigate(['/productdetail', this.barcode]);
        }).catch(err => {
            console.log('Error', err);
        });
    }


}

