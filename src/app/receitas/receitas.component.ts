import { Component, Input,  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {

  @Input() title = '';
  @Input() instructions = '';
  @Input() linkVideo = '';

  constructor(public activeModal: NgbActiveModal) {}

}
