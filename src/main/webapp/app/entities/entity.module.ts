import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterEdocApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterEdocApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterEdocApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterEdocApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterEdocApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterEdocApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterEdocApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterEdocApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterEdocApplicationRegionMySuffixModule,
        JhipsterEdocApplicationCountryMySuffixModule,
        JhipsterEdocApplicationLocationMySuffixModule,
        JhipsterEdocApplicationDepartmentMySuffixModule,
        JhipsterEdocApplicationTaskMySuffixModule,
        JhipsterEdocApplicationEmployeeMySuffixModule,
        JhipsterEdocApplicationJobMySuffixModule,
        JhipsterEdocApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEdocApplicationEntityModule {}
