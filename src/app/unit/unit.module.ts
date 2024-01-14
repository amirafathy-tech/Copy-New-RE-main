import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

import { UnitFixtureEditComponent } from './unit-fixture/unit-fixture-edit/unit-fixture-edit.component';
import { UnitFixtureComponent } from './unit-fixture/unit-fixture.component';
import { UnitFloorEditComponent } from './unit-floor/unit-floor-edit/unit-floor-edit.component';
import { UnitFloorComponent } from './unit-floor/unit-floor.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitOfMeasureEditComponent } from './unit-of-measure/unit-of-measure-edit/unit-of-measure-edit.component';
import { UnitOfMeasureComponent } from './unit-of-measure/unit-of-measure.component';
import { UnitOrientationEditComponent } from './unit-orientation/unit-orientation-edit/unit-orientation-edit.component';
import { UnitOrientationComponent } from './unit-orientation/unit-orientation.component';
import { UnitStatusEditComponent } from './unit-status/unit-status-edit/unit-status-edit.component';
import { UnitStatusComponent } from './unit-status/unit-status.component';
import { UnitSubTypeEditComponent } from './unit-sub-type/unit-sub-type-edit/unit-sub-type-edit.component';
import { UnitSubTypeComponent } from './unit-sub-type/unit-sub-type.component';
import { UnitViewEditComponent } from './unit-view/unit-view-edit/unit-view-edit.component';
import { UnitViewComponent } from './unit-view/unit-view.component';
import { UnitComponent } from './unit.component';
import { UsageTypeEditComponent } from './usage-type/usage-type-edit/usage-type-edit.component';
import { UsageTypeComponent } from './usage-type/usage-type.component';
import { AuthGuard } from '../auth/auth.guard';
import { UnitAreaComponent } from './unit-area/unit-area.component';
import { UnitService } from './unit.service';
import { UnitAreaService } from './unit-area/unit-area.service';
import { UnitFixtureService } from './unit-fixture/unit-fixture.service';
import { UnitOfMeasureService } from './unit-of-measure/unit-of-measure.service';
import { UnitOrientationService } from './unit-orientation/unit-orientation.sevice';
import { UnitStatusService } from './unit-status/unit-status.service';
import { UnitSubTypeService } from './unit-sub-type/unit-sub-type.service';
import { UnitViewService } from './unit-view/unit-view.service';
import { UsageTypeService } from './usage-type/usage-type.service';

@NgModule({
    declarations: [
        UnitComponent,
        UnitOrientationComponent,
        UnitOrientationEditComponent,
        UnitFixtureComponent,
        UnitFixtureEditComponent,
        UnitStatusComponent,
        UnitStatusEditComponent,
        UnitViewComponent,
        UnitViewEditComponent,
        UsageTypeComponent,
        UsageTypeEditComponent,
        UnitSubTypeComponent,
        UnitSubTypeEditComponent,
        UnitFloorComponent,
        UnitFloorEditComponent,
        UnitOfMeasureComponent,
        UnitOfMeasureEditComponent,
        UnitListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FundamentalNgxCoreModule,
        SharedModule,
        RouterModule.forChild([
        { path: 'unit', canActivate: [AuthGuard], component: UnitComponent },
        { path: 'unit-view', canActivate: [AuthGuard], component: UnitViewComponent },
        { path: 'unit-status', canActivate: [AuthGuard], component: UnitStatusComponent },
        { path: 'unit-floor', canActivate: [AuthGuard], component: UnitFloorComponent },
        { path: 'uom', canActivate: [AuthGuard], component: UnitOfMeasureComponent },
        { path: 'unit-usagetype', canActivate: [AuthGuard], component: UsageTypeComponent },
        { path: 'unit-subtype', canActivate: [AuthGuard], component: UnitSubTypeComponent },
        { path: 'unit-orientation', canActivate: [AuthGuard], component: UnitOrientationComponent },
        { path: 'unit-fixture', canActivate: [AuthGuard], component: UnitFixtureComponent },
        { path: 'unit-area', canActivate: [AuthGuard], component: UnitAreaComponent }
       ]),
       SharedModule
    ],
    providers: [
       UnitService,
       UnitAreaService,
       UnitFixtureService,
       UnitOfMeasureService,
       UnitOrientationService,
       UnitStatusService,
       UnitSubTypeService,
       UnitViewService,
       UsageTypeService
      ]
})
export class UnitModule { }
