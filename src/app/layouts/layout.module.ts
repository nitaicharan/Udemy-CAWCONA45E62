import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FullComponent } from './full/full.component';

@NgModule({
    declarations: [FullComponent],
    imports: [
        RouterModule,
        SharedModule,
        CoreModule
    ],
    exports: [FullComponent]
})
export class LayoutModule { }
