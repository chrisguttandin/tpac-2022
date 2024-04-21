import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tpc-slide-six',
    standalone: true,
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent {}
