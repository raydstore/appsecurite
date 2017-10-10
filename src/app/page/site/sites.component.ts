import { InfoSite } from './../dialog-modal/dialog-modal.component';
import { NotFoundError } from './../../common/not-found-error';
/* import { Label } from './../../table/label'; */
import { LabelService } from './../../services/label.service';
import { AppError } from './../../common/app-error';
import { BadInput } from './../../common/bad-input';
/* import { Site } from './../../table/site'; */
import { SiteService } from './../../services/site.service';
import { TreeNode } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { OrganizationChartModule } from 'primeng/primeng';
import { Component, OnInit, ViewEncapsulation, Attribute } from '@angular/core';
import { DataGridModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import {Site} from '../../table/table';

@Component({
  selector: 'app-site',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SitesComponent implements OnInit {
  sites: Site[] = [];
  data: TreeNode[] = [];
 /*  ltLabels: Label[] = [];
  labels: any[] = [{ label: 'Select Label', value: null }];
  selectedLabel: Label;
  display = false;
  nodec: TreeNode; */

  
  constructor(private service: SiteService, private lbService: LabelService) {
  }

  ngOnInit() {
    this.service.getAll()
     .subscribe(sites => {
         this.sites = sites;
         this.buildSites();
      });
    /* this.lbService.getAll().
      subscribe(ltLabels => {
        this.ltLabels = ltLabels;
        this.bulidLabels(); 
    }
    ); */
  }

  /* bulidLabels() {
    for (let label of this.ltLabels) {
      this.labels.push({label: label.name, value: label});
    }
  } */

  getSiteRoot(): Site {
     for (let site of this.sites) {
      if (site.idparent == null) {
           return site;
         }
     }
  }

  getChilds(siteParent: Site): TreeNode[] {
    let result: TreeNode[] = [];
    for (let site of this.sites) {
      if (site.idparent !== undefined) {
       if (site.idparent['id'] === siteParent['id']) {
        let value: any;
        let childs: TreeNode[] = this.getChilds(site);
         if (childs.length !== 0) {
         value = {
          label: site.name,
          type: 'branch',
          data: site,
          children: childs,
          expanded: true,
          styleClass: 'stparent'
        };
      } else {
           value = {
            label: site.name,
            type: 'sheet',
            data: site,
            expanded: true,
            styleClass: 'stchild'
          };
      }
        result.push(value);
       }
      }
     }
     return result;
  }

  buildSites() {
     let siteRoot = this.getSiteRoot();
      let value: any = {
       label: siteRoot.name,
       type: 'branch',
       data: siteRoot,
       children: this.getChilds(siteRoot),
       expanded: true,
       styleClass: 'stparent'
     };
     this.data.push(value);
  }
// node: TreeNode, infoLabel: InfoLabel
  newSite(infoSite: InfoSite) {
    console.log(JSON.stringify(infoSite.node));
    let siteChild = {
      id: 0,
      name: infoSite.name,
      idlabel: infoSite.label,
      /* idlabel: this.selectedLabel, */
      idparent: infoSite.node.data,
      datecreate: new Date(),
      dateupdate: new Date(),
      owner: 'ali',
      lastuser: 'ali'
    };
    console.log('2');
    let nd: TreeNode = {
      label: infoSite.name,
      type: 'sheet',
      data: siteChild,
      styleClass: 'stchild'
    };
    console.log('3');
    if (!('children' in infoSite.node)) {
      infoSite.node.children = [];
      infoSite.node.type = 'branch';
      infoSite.node.styleClass = 'stparent';
    }
    console.log('4');
    infoSite.node.children.splice(0, 0, nd);
    console.log('node = ' + JSON.stringify(infoSite.node));
    this.service.create(siteChild)
        .subscribe(nd => {
         // input.value = '';
        //  this.selectedLabel = { name: 'Select Label' };
        //  this.display = false;
          console.log('nd = ' + JSON.stringify(nd));
        // this.label['id'] = newlabel.id;
      }, (error: AppError) => {
        infoSite.node.children.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(originalError);
        } else {
          throw error;
        }
      });
  }

  deleteSite(node: TreeNode) {
    console.log('1');
    let index = this.sites.indexOf(node.data);
    this.sites.splice(index, 1);
    console.log('id = ' + (<Site>node.data).id);
    console.log('node = ' + JSON.stringify(node));
    this.service.delete((<Site> node.data).id)
      .subscribe(
      null,
      (error: Response) => {
        console.log('3');
        this.sites.splice(index, 0, node.data);
        console.log('4');
        if (error instanceof NotFoundError) {
          alert('se site est deja supprimer !');
        } else {
          throw error;
        }
      }
      );
  }

/*   showDialog() {
    this.display = true;
  }

  cancelCreate(input: HTMLInputElement, inputSelect: HTMLSelectElement) {
    input.value = '';
    inputSelect.selectedIndex = 0;
    this.selectedLabel = { name: 'Select Label'};
    this.display = false;
  } */

}
