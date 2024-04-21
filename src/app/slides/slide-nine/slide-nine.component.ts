import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tpc-slide-nine',
    standalone: true,
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {}
