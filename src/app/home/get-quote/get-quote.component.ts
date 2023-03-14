import { Component } from '@angular/core';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styles: [`
    ::ng-deep .cdk-overlay-container {
      z-index: 1010 !important;
    }
  `]
})
export class GetQuoteComponent {

}
