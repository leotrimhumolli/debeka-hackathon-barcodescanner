import {Component, OnInit} from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
    selector: 'app-list',
    templateUrl: 'product-page.component.html',
    styleUrls: ['product-page.component.scss']
})
export class ProductPage implements OnInit {

    constructor(public tts: TextToSpeech) {
    }

    ngOnInit() {
    }

    speak() {
        this.tts.speak({text: 'Hallo Welt', locale: 'de-DE'})
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }
}
