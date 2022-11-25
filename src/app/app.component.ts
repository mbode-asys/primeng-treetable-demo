import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  files1: TreeNode[];

  files2: TreeNode[];

  cols: any[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files1 = files));
    this.nodeService.getFilesystem().then((files) => (this.files2 = files));

    this.cols = [
      { field: 'resource', header: 'Resource/Plan Object' },
      { field: 'availability', header: 'Availability' },
      { field: '22-11-21', header: '22-11-21' },
      { field: '22-11-22', header: '22-11-22' },
      { field: '22-11-23', header: '22-11-23' },
    ];
  }
}
