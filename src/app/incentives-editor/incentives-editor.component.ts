import { Component, OnInit } from '@angular/core';

import { SurveyProcessAndStorageService } from '../services/survey-process-and-storage.service';
import { Survey } from '../survey_processors/survey_processors';

@Component({
  selector: 'app-incentives-editor',
  templateUrl: './incentives-editor.component.html',
  styleUrls: ['./incentives-editor.component.css']
})
export class IncentivesEditorComponent implements OnInit {

	money_input = 0;
	power_input = 0;

	constructor(private process: SurveyProcessAndStorageService) { }

	ngOnInit(): void {
	}
	
	surveyFinished(){
		var survey: Survey = {
			money: Number(this.money_input),
			power: Number(this.power_input)	
		}
		this.process.processSurvey(survey);
	}

}
