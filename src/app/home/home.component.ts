import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetQuoteComponent } from './get-quote/get-quote.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        
    `]
})
export class HomeComponent {

    constructor(public dialog: MatDialog) { }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        navSpeed: 700,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
        nav: false
    }

    galleryCarouselOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        navSpeed: 700,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            740: {
                items: 1
            },
            940: {
                items: 1
            }
        },
        nav: false
    }

    openGetQuoteModal() {
        this.dialog.open(GetQuoteComponent, {
            width: '450px',
            height: '600px'
        });
    }
}
