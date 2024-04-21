import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tpc-slide-three',
    standalone: true,
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent {}
