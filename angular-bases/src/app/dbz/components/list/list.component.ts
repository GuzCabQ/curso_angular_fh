import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  onDeleteId:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 5000 },
  ];

  onDelecteCharacter(id:string):void{
  this.onDeleteId.emit(id);
  }
}
