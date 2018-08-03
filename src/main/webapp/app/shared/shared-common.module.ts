import { NgModule } from '@angular/core';

import { JhipsterEdocApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterEdocApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterEdocApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterEdocApplicationSharedCommonModule {}
