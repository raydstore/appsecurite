import { BadInput } from './../../common/bad-input';
import { TitletaskService } from './../../services/titletask.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeTableModule, TreeNode, SharedModule } from 'primeng/primeng';
import { Titletask } from './../../table/table';
import { AppError } from '../../common/app-error';

@Component({
  selector: 'app-tiltletask',
  templateUrl: './tiltletask.component.html',
  styleUrls: ['./tiltletask.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TiltletaskComponent implements OnInit {
  titletasks: Titletask[] = [];
  data: TreeNode[] = [];
  templateNewTitleTask: any = {
    datecreate: new Date(),
    dateupdate: new Date(),
    id: 0,
    kind: 'W',
    lastuser: 'ali',
    name: '',
    owner: 'ali'
  };

  kinds = [
    { id: 'W', name: 'WorkSheet' },
    { id: 'W', name: 'Branch' },
    { id: 'W', name: 'Sheet' }
  ];

  newTitleTask: any = this.templateNewTitleTask;

  dialogVisible = false;
  newMode = false;
  newWorkSheet = false;

  constructor(private service: TitletaskService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
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
             expanded: true,
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

  addTitleTask(node) {
    this.newTitleTask = this.templateNewTitleTask;
    this.newTitleTask.kindparent = node.data.kind;
    this.newTitleTask.idparent   = node.data.id;
    this.newWorkSheet = false;
    this.showNewDialoge();
  }

  addWorkSheet() {
    this.newTitleTask = this.templateNewTitleTask;
    this.newWorkSheet = true;
    this.showNewDialoge();
  } 

  createTitleTask() {
    this.dialogVisible = false;
    this.titletasks = [this.newTitleTask, ...this.titletasks];
    this.service.create(this.newTitleTask)
      .subscribe(newtt => {
        this.loadData();
      }, (error: AppError) => {
        this.titletasks.splice(0, 1);
        if (error instanceof BadInput) {
        } else {
          throw error;
        }
      });
  }

  deleteTitleTask(node) {

  }

  updateTitleTask(node) {

  }

  showNewDialoge() {
    this.dialogVisible = true;
    this.newMode = true;
  }

  hideNewDialoge() {
    this.dialogVisible = false;
    this.newMode = false;
  }

}
