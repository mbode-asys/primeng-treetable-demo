import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  files2: TreeNode[];

  scrollableCols: any[];
  frozenCols: any[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files2 = files));

    this.frozenCols = [
      {
        field: 'nodeName',
        header: 'Element',
      },
    ];

    this.scrollableCols = [
      {
        field: '22-11-01',
        header: '22-11-01',
      },
      {
        field: '22-11-02',
        header: '22-11-02',
      },
      {
        field: '22-11-03',
        header: '22-11-03',
      },
      {
        field: '22-11-04',
        header: '22-11-04',
      },
      {
        field: '22-11-05',
        header: '22-11-05',
      },
      {
        field: '22-11-06',
        header: '22-11-06',
      },
      {
        field: '22-11-07',
        header: '22-11-07',
      },
      {
        field: '22-11-08',
        header: '22-11-08',
      },
      {
        field: '22-11-09',
        header: '22-11-09',
      },
      {
        field: '22-11-10',
        header: '22-11-10',
      },
      {
        field: '22-11-11',
        header: '22-11-11',
      },
      {
        field: '22-11-12',
        header: '22-11-12',
      },
      {
        field: '22-11-13',
        header: '22-11-13',
      },
      {
        field: '22-11-14',
        header: '22-11-14',
      },
      {
        field: '22-11-15',
        header: '22-11-15',
      },
      {
        field: '22-11-16',
        header: '22-11-16',
      },
      {
        field: '22-11-17',
        header: '22-11-17',
      },
      {
        field: '22-11-18',
        header: '22-11-18',
      },
      {
        field: '22-11-19',
        header: '22-11-19',
      },
      {
        field: '22-11-20',
        header: '22-11-20',
      },
      {
        field: '22-11-21',
        header: '22-11-21',
      },
      {
        field: '22-11-22',
        header: '22-11-22',
      },
      {
        field: '22-11-23',
        header: '22-11-23',
      },
      {
        field: '22-11-24',
        header: '22-11-24',
      },
      {
        field: '22-11-25',
        header: '22-11-25',
      },
      {
        field: '22-11-26',
        header: '22-11-26',
      },
      {
        field: '22-11-27',
        header: '22-11-27',
      },
      {
        field: '22-11-28',
        header: '22-11-28',
      },
      {
        field: '22-11-29',
        header: '22-11-29',
      },
      {
        field: '22-11-30',
        header: '22-11-30',
      },
    ];
  }
}
