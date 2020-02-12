import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-expandable',
    templateUrl: './expandable.component.html',
    styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {
    @ViewChild('expandWrapper', {static: false, read: ElementRef}) expandWrapper: ElementRef;
    @Input('expanded') expanded: boolean = false;
    @Input('expandHeight') expandHeight: string = '150px';
    @Input() headline: string = '';

    constructor(public renderer: Renderer2) {
    }

    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
    }

}
