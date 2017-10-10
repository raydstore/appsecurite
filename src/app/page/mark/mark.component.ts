import { LastidService } from './../../services/lastid.service';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { BadInput } from './../../common/bad-input';
import { MarkService } from './../../services/mark.service';
import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Mark } from '../../table/table';
import { PanelModule } from 'primeng/primeng';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-mark',
  templateUrl: 'mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  marks: any[];
  selectedMark: Mark;
  // mark: any;
  newMark: any = {
    datecreate: new Date(),
    dateupdate: new Date(),
    id: 0,
    lastuser: 'ali',
    name: '',
    owner: 'ali'
  };
  dialogVisible = false;
  newMode = false;

  lastids: any[];
  lastid: any;

  constructor(private service: MarkService, private lastidService: LastidService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(marks => {
        this.marks = marks;
      });
    /* this.lastidService.getAll()
      .subscribe(lastids => this.lastids = lastids); */
  }

  getLastid(name) {
     let a = '';
     this.lastidService.getAll()
       .subscribe(lastids => {
         for (let lid of lastids) {
           if (lid.name === name) { a = lid.count; }
         }
       });
       return a;
  }
  


  createMark() {
    this.dialogVisible = false;
  //  console.log(JSON.stringify(this.newMark));
    // this.marks.splice(0, 0, this.newMark);
    this.marks = [this.newMark, ...this.marks];
    // console.log('before marks' + JSON.stringify(this.lastids));

    this.service.create(this.newMark)
      .subscribe(newMark => {
        // this.label['id'] = newlabel.id;
      //  console.log('in side marks' + JSON.stringify(this.lastidService.getItem('mark')));
      }, (error: AppError) => {
        this.marks.splice(0, 1);
        if (error instanceof BadInput) {
          // this.form.setErrors(originalError);
        } else {
          throw error;
        }
      });
    // console.log('after marks' + this.getLastid('mark'));
  }

  deleteMark(_mark: Mark) {
    let index = this.marks.indexOf(_mark);
    this.marks.splice(index, 1);
    this.marks = [...this.marks] ;
    // this.marks.splice(index, 1);
    console.log('_mark' + _mark.id + ', ' + JSON.stringify(_mark));
    this.service.delete(_mark.id)
      .subscribe(
      null,
      (error: Response) => {
        this.marks.splice(index, 0, _mark);

        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
          throw error;
        }
      }
      );
  }

  updateMark(_mark, input: HTMLInputElement) {
    _mark.name = input.value;
    this.service.update(_mark)
      .subscribe(updatemark => {
        console.log(updatemark);
      });
    console.log('name = ' + input.value);
    console.log(_mark);
  }

  cancelUpdate(_mark) {
    //
  }

  showNewDialoge() {
    this.dialogVisible = true;
    this.newMode = true;
    this.newMark = {
      datecreate: new Date(),
      dateupdate: new Date(),
      id: 0,
      lastuser: 'ali',
      name: '',
      owner: 'ali'
    };
  }

  hideNewDialoge() {
    this.dialogVisible = false;
  }

  showDialogToAdd() {
    this.newMode = true;
   // this.mark = new PrimeCar();
    this.dialogVisible = true;
  }

  save() {
    let marks = [...this.marks];
    if (this.newMode) {
      marks.push(this.newMark);
    } else {
      marks[this.findSelectedMarkIndex()] = this.newMark;
    }
    this.marks = marks;
    this.newMark = null;
    this.dialogVisible = false;
  }

  delete() {
    let index = this.findSelectedMarkIndex();
    this.marks = this.marks.filter((val, i) => i !== index);
    this.newMark = null;
    this.dialogVisible = false;
  }

  onRowSelect(event) {
    /* this.newMode = false;
    this.newMark = this.cloneMark(event.data);
    this.dialogVisible = true; */
  }

  cloneMark(c: Mark): Mark {
    let mark: Mark; // = new Prime();
    /* for (let prop of c) {
      mark[prop] = c[prop];
    } */
    mark = c;
    return mark;
  }

  findSelectedMarkIndex(): number {
    return this.marks.indexOf(this.selectedMark);
  }
}



