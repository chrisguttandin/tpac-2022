import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'tpc-slide-eight',
    templateUrl: './slide-eight.component.html'
})
export class SlideEightComponent {}
