import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blocks = [{ type: 'start', status: 0 }];

  constructor() {

  }

  ngOnInit() {
    this.blocks = [{ type: 'start', status: 0 }];
  }

  addBlock(type, index) {
    debugger;
    var block = { type: '', status: 0 };
    block.type = type == 'intermediate' ? 'intermediate' : 'end';
    this.blocks.splice(index + 1, 0, block);
  }

  showButtons(index) {
    this.blocks[index].status = 1;
  }
}
