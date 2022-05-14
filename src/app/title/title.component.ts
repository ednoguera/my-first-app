import {
  Component, OnInit, OnChanges, SimpleChanges, Input,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() 
  title: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
