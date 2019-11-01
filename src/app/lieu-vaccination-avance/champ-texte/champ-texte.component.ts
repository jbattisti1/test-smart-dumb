import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-champ-texte',
  templateUrl: './champ-texte.component.html',
  styleUrls: ['./champ-texte.component.css']
})
export class ChampTexteComponent implements OnInit {

  @Input() texte = '';
  @Output() texteInput: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitTexteInput(event: any) {
    this.texteInput.emit(event.target.value);
  }
}
