import { NotFoundError } from './../../common/not-found-error';
import { Label } from './../../table/label';
import { LabelService } from './../../services/label.service';
import { AppError } from './../../common/app-error';
import { BadInput } from './../../common/bad-input';
import { InfoSite } from './../../table/infoSite';
import { Site } from './../../table/site';
import { SiteService } from './../../services/site.service';
import { TreeNode } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { OrganizationChartModule } from 'primeng/primeng';
import { Component, OnInit, ViewEncapsulation, Attribute } from '@angular/core';
import { DataGridModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

@Component({
  selector: 'app-site',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SitesComponent implements OnInit {
  sites: Site[] = [];
  data: TreeNode[] = [];
  ltLabels: Label[] = [];
  labels: any[] = [{ label: 'Select Label', value: null }];
  selectedLabel: Label;
  display: boolean = false;

  
  constructor(private service: SiteService, private luService: LabelService) {
  }

  ngOnInit() {
    this.service.getAll()
     .subscribe(sites => {
         this.sites = sites;
         this.buildSites();
      });
    this.luService.getAll().
      subscribe(ltLabels => {
        this.ltLabels = ltLabels;
        this.bulidLabels();
    }
    );
  }

  bulidLabels() {
    for (let label of this.ltLabels) {
      this.labels.push({label: label.name, value: label});
    }
  }

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

  newSite(node: TreeNode, input: HTMLInputElement) {
    let siteChild = {
      id: 0,
      name: input.value,
      idlabel: this.selectedLabel,
      idparent: node.data,
      datecreate: new Date(),
      dateupdate: new Date(),
      owner: 'ali',
      lastuhser: 'ali',
    };
    let nd: TreeNode = {
      label: input.value,
      type: 'sheet',
      data: siteChild,
      styleClass: 'stchild'
    };
    if (!('children' in node)) {
      node.children = [];
      node.type = 'branch';
      node.styleClass = 'stparent';
    }
    node.children.splice(0, 0, nd);
    this.service.create(siteChild)
        .subscribe(nd => {
          input.value = '';
        // this.label['id'] = newlabel.id;
      }, (error: AppError) => {
        node.children.splice(0, 1);

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

  showDialog() {
    this.display = true;
  }

  cancelCreate(input: HTMLInputElement) {
    input.value = '';
    this.display = false;
  }

}
