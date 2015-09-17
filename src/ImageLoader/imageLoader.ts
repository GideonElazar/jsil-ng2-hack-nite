/// <reference src="typings/tsd.d.ts">
import { Component, View, EventEmitter} from "angular2/angular2";

@Component({
    selector: "ag",
    properties: ['source'],
    events:['load']
})
@View({
    template: `<img [src]="source" (load)="onLoad()">`
})

export default class ImageLoader {

    load = new EventEmitter();

    constructor() {
    }

    onLoad(){
        console.log('Loaded');
    }
}