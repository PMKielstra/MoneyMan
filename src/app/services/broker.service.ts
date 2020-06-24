import { Injectable } from '@angular/core';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';

import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

import { Incentive } from '../survey_processors/survey_processors';
import { MoneyIncentive } from '../survey_processors/money_incentive';
import { PowerIncentive } from '../survey_processors/power_incentive';


@Injectable({
	providedIn: 'root'
})
export class BrokerService {

	readonly EventTypes = { surveyCompleted: 'surveyCompleted' };

	incentives: Incentive[];

	constructor(private pubSub: NgxPubSubService, private store: Store<State>) {
		this.incentives = [ new MoneyIncentive(), new PowerIncentive() ];
		const _store = this.store; //For scope
		for (var i = 0; i < this.incentives.length; i++){
			const incentive = this.incentives[i]; //For scope
			this.pubSub.subscribe(this.EventTypes.surveyCompleted, function(data){
				_store.dispatch(incentive.getIncentive(data));			
			});
		}	
	}	
}
