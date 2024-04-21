import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tpc-slide-thirteen',
    standalone: true,
    templateUrl: './slide-thirteen.component.html'
})
export class SlideThirteenComponent {}
