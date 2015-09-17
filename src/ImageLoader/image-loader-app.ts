/// <reference src="typings/tsd.d.ts">
import { NgFor, Component, View, EventEmitter} from "angular2/angular2";
import ImageLoader from "src/ImageLoader/ImageLoader";


@Component({
    selector: "image-loader-app"
})
@View({
    directives: [ImageLoader, NgFor],
    template: `
    <div>
       <ag *ng-for="#image of images" [source]="image"></ag>
    </div>`
})

export default class ImageLoaderApp {
    images;

    constructor() {

        this.images = [
            'http://placehold.it/350x150',
            'http://placehold.it/350x150',
            'http://placehold.it/350x150'
        ];
    }
}

