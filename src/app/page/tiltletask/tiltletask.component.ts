import { Titletask } from './../../table/titletask';
import { TitletaskService } from './../../services/titletask.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeTableModule, TreeNode, SharedModule } from 'primeng/primeng';

@Component({
  selector: 'app-tiltletask',
  templateUrl: './tiltletask.component.html',
  styleUrls: ['./tiltletask.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TiltletaskComponent implements OnInit {
  titletasks: Titletask[] = [];
  data: TreeNode[] = [];
  constructor(private service: TitletaskService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(titletasks => {
        this.titletasks = titletasks;
        this.buildTitletask();
      });
  }

  getChilds(titletaskParent: Titletask): TreeNode[] {
    let result: TreeNode[] = [];
    let childs: TreeNode[];
    let value: any;
    for (let titletask of this.titletasks) {
      if (titletask.idparent !== undefined) {
        if ('idparent' in titletask) {
          if ((titletask.idparent === titletaskParent['id']) && 
              (titletask.kindparent === titletaskParent['kind'])) {
          childs = this.getChilds(titletask);
          if (childs.length !== 0) {
            value = {
              name: titletask.name,
              type: 'branch',
              data: titletask,
              children: childs,
              expanded: true,
              styleClass: 'clbranch'
            };
          } else {
            value = {
              name: titletask.name,
              type: 'sheet',
              data: titletask,
              styleClass: 'clstatment'
            };
          }
          result.push(value);
        }
        }
      }
    }
    return result;
  }

  buildTitletask() {
    let value: any;
    let childs: TreeNode[];
    for (let titletask of this.titletasks) {
       if (!('idparent' in titletask)) {
         childs = this.getChilds(titletask);
         if (childs.length !== 0) {
           value = {
             name: titletask.name,
             type: 'branch',
             data: titletask,
             children: childs,
             expanded: false,
             styleClass: 'clworksheet'
           };
         } else {
           value = {
             name: titletask.name,
             type: 'branch',
             data: titletask,
             styleClass: 'clworksheet'
           };
    };
    this.data.push(value);
    }
    }
    console.log(JSON.stringify(this.data));
  }

}
