import { Component, OnInit } from '@angular/core';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';

import { BrokerService } from '../services/broker.service';
import { Survey } from '../survey_processors/survey_processors';

@Component({
  selector: 'app-incentives-editor',
  templateUrl: './incentives-editor.component.html',
  styleUrls: ['./incentives-editor.component.css']
})
export class IncentivesEditorComponent implements OnInit {

	money_input = 0;
	power_input = 0;

	constructor(private broker: BrokerService, private pubSub: NgxPubSubService) { }

	ngOnInit(): void {
	}
	
	surveyFinished(){
		var survey: Survey = {
			money: Number(this.money_input),
			power: Number(this.power_input)	
		}
		this.pubSub.publishEvent(this.broker.EventTypes.surveyCompleted, survey);
	}

}
