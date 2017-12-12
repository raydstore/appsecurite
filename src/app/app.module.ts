import { VPropertyService } from './services/vproperty.service';
import { IPropertyService } from './services/iproperty.service';
import { VwpropertyService } from './services/vwproperty.service';
import { PropertyService } from './services/property.service';
import { ObjectService } from './services/object.service';
import { LastidService } from './services/lastid.service';
import { TypeOperationService } from './services/type-operation.service';
import { TypeObjectService } from './services/type-object.service';
import { UnitMeasureService } from './services/unit-measure.service';
import { ActivityService } from './services/activity.service';
import { MarkService } from './services/mark.service';
import { TitletaskService } from './services/titletask.service';
import { NotFoundComponent } from './page/notfound/notFound.component';
import { SiteService } from './services/site.service';
import { SitesComponent } from './page/site/sites.component';
import { OrganizationChartModule, DataGridModule, TreeTableModule, DropdownModule } from 'primeng/primeng';
import { LabelsComponent } from './page/label/labels.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { LabelService } from './services/label.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavComponent } from './nav/nav.component';
import { OrganizationChartComponent } from './organization-chart/organization-chart.component';

import { CommonModule } from '@angular/common';
/* import { OrganizationChartDemoRoutingModule } from 'primeng/primeng'; */
import { GrowlModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { TabViewModule } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { TiltletaskComponent } from './page/tiltletask/tiltletask.component';
import { InplaceModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { MarkComponent } from './page/mark/mark.component';
import { TypeObjectComponent } from './page/type-object/type-object.component';
import { TypeOperationComponent } from './page/type-operation/type-operation.component';
import { OperationComponent } from './page/operation/operation.component';
import { ActivityComponent } from './page/activity/activity.component';
import { ObjectComponent } from './page/object/object.component';
import { InstanceComponent } from './page/instance/instance.component';
import { UnitmeasureComponent } from './page/unitmeasure/unitmeasure.component';
import { JobpostingComponent } from './page/jobposting/jobposting.component';
import { TypeFormationComponent } from './page/type-formation/type-formation.component';
import { FormationComponent } from './page/formation/formation.component';
import { AlertComponent } from './page/alert/alert.component';
import { Input } from '@angular/core';

import { DialogModalComponent } from './page/dialog-modal/dialog-modal.component';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PropertyComponent } from './page/property/property.component';
import { VwpropertyComponent } from './page/vwproperty/vwproperty.component';
import { InstanceObjectComponent } from './page/instance-object/instance-object.component';
import { InstanceService } from './services/instance.service';
import { DPropertyService } from './services/dproperty.service';
import { NPropertyService } from './services/nproperty.service';
import { SiteNameComponent } from './page/site-name/site-name.component';
import { HomeComponent } from './home/home.component';
import { OperationService } from './services/operation.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LabelsComponent,
    SitesComponent,
    NavComponent,
    OrganizationChartComponent,
    NotFoundComponent,
    TiltletaskComponent,
    MarkComponent,
    TypeObjectComponent,
    TypeOperationComponent,
    OperationComponent,
    ActivityComponent,
    ObjectComponent,
    InstanceComponent,
    UnitmeasureComponent,
    JobpostingComponent,
    TypeFormationComponent,
    FormationComponent,
    AlertComponent,
    DialogModalComponent,
    PropertyComponent,
    VwpropertyComponent,
    InstanceObjectComponent,
    SiteNameComponent,
    HomeComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    OrganizationChartModule,

    CommonModule,
    OrganizationChartModule,
    DataGridModule,
    GrowlModule,
    PanelModule,
    TabViewModule,
    TreeTableModule,
    InplaceModule,
    DropdownModule,
    DialogModule,
    DataTableModule,
    SharedModule,
    CodeHighlighterModule,
    RouterModule.forRoot([
      { path: '', component: NavComponent},
      { path: 'activity', component: ActivityComponent },
      { path: 'label', component: LabelsComponent },
      { path: 'mark', component: MarkComponent },
      { path: 'typeobject', component: TypeObjectComponent },
      { path: 'typeoperation', component: TypeOperationComponent },
      { path: 'operation', component: OperationComponent },
      { path: 'unitmeasure', component: UnitmeasureComponent },
      { path: 'site', component: SitesComponent },
      { path: 'object', component: ObjectComponent },
      { path: 'operation', component: OperationComponent },
      { path: 'titletask', component: TiltletaskComponent },
      { path: 'instance', component: InstanceComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    PostService,
    LabelService,
    SiteService,
    TitletaskService,
    MarkService,
    ActivityService,
    UnitMeasureService,
    TypeObjectService,
    TypeOperationService,
    OperationService,
    LastidService,
    ObjectService,
    PropertyService,
    InstanceService,
    VwpropertyService,
    DPropertyService,
    IPropertyService,
    NPropertyService,
    VPropertyService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
