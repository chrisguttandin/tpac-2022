import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tpc-slide-five',
    standalone: true,
    templateUrl: './slide-five.component.html'
})
export class SlideFiveComponent {}
