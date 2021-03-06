import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'on'){
      return 'green';
    }
    else if(this.appareilStatus === 'off'){
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'on'){
      this.appareilService.switchOffOne(this.index);
    }
    else if(this.appareilStatus === 'off'){
      this.appareilService.switchOnOne(this.index);
    }
  }

}
