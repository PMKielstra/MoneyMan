import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/index';

import { Survey, Incentive } from '../survey_processors/survey_processors';
import { MoneyIncentive } from '../survey_processors/money_incentive';
import { PowerIncentive } from '../survey_processors/power_incentive';

@Injectable({
	providedIn: 'root'
})
export class SurveyProcessAndStorageService {

	incentives: Incentive[];

	constructor(private store: Store<State>) {
		this.incentives = [ new MoneyIncentive(), new PowerIncentive() ]; // The only place we have to writ out a list of all the incentives.  It's similar to registering a service in a module.
	}

	processSurvey(survey: Survey){
		for (var i = 0; i < this.incentives.length; i++){
			this.store.dispatch(this.incentives[i].getIncentive(survey));
		}
	}
}
