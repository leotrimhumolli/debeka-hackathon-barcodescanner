import {Component, OnInit, DoBootstrap} from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {ActivatedRoute} from '@angular/router';
import {DatabaseService, Manufacturer, Product, user} from '../database.service';

@Component({
    selector: 'app-list',
    templateUrl: 'product-detail-page.component.html',
    styleUrls: ['product-detail-page.component.scss']
})
export class ProductPageDetails implements OnInit {

    product: Product;
    manufacturer: Manufacturer;
    user: user;
    itemIngredients = {expanded: false};
    itemManufacturer = {expanded: false};
    isSpeaking = false;

    constructor(public tts: TextToSpeech,
                private route: ActivatedRoute,
                private  activatedRoute: ActivatedRoute,
                public db: DatabaseService) {
    }

    ngOnInit() {
        this.product = this.db.products.find(x => x.barcode === parseInt(this.route.snapshot.paramMap.get('id'), 10));
        const manufacturerId = parseInt(('' + this.product.barcode).substr(0, 6), 10);
        this.manufacturer = this.db.manufactures.find(x => x.id === manufacturerId);
        this.user = this.db.user[0];
    }


    toggleSpeak(text: string[]) {
        if (this.isSpeaking) {
            this.tts.stop().then(() => this.isSpeaking = false).catch((reason: any) => this.isSpeaking = false);
        } else {
            const newText = text.join(', ');
            this.tts.speak({text: text[0], locale: 'de-DE'})
                .then(() => this.isSpeaking = true)
                .catch((reason: any) => this.isSpeaking = false);
        }

    }

}
