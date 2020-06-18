import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/index';

import { AddMoneyAction, AddPowerAction } from '../actions/actions';

import { Survey, Incentive } from '../survey_processors/survey_processors';

@Injectable({
	providedIn: 'root'
})
export class SurveyProcessAndStorageService {

	incentives: Incentive[];

	constructor(private store: Store<State>) {
		this.incentives = [ new MoneyIncentive(), new PowerIncentive() ]; // Hardcoded here.  In SARA, I'd prefer a pub/sub model.
	}

	processSurvey(survey: Survey){
		for (var i = 0; i < this.incentives.length; i++){
			this.store.dispatch(this.incentives[i].getIncentive(survey));
		}
	}
}

class MoneyIncentive implements Incentive {
	constructor(){}
	getIncentive(survey: Survey){ return new AddMoneyAction({amount: survey.money}); }
}

class PowerIncentive implements Incentive {
	constructor(){}
	getIncentive(survey: Survey){ return new AddPowerAction({amount: survey.power}); }
}

