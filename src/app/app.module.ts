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
import { Type } from './page/type.object/type.object.component';
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
    Type.ObjectComponent,
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
    AlertComponent
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
    CodeHighlighterModule,
    RouterModule.forRoot([
      { path: '', component: NavComponent},
      { path: 'label', component: LabelsComponent },
      { path: 'site', component: SitesComponent },
      { path: 'titletask', component: TiltletaskComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    PostService,
    LabelService,
    SiteService,
    TitletaskService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
