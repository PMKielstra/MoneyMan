import { Injectable } from '@angular/core';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';

import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

import { SurveySubscriber } from '../survey_processors/survey_processors';
import { MoneyIncentive } from '../survey_processors/money_incentive';
import { PowerIncentive } from '../survey_processors/power_incentive';


@Injectable({
	providedIn: 'root'
})
export class BrokerService {

	readonly EventTypes = { surveyCompleted: 'surveyCompleted' };

	subscribers: SurveySubscriber[];

	constructor(private pubSub: NgxPubSubService, private store: Store<State>) {
		this.subscribers = [ new MoneyIncentive(), new PowerIncentive() ];
		const _store = this.store; //For scope
		for (var i = 0; i < this.subscribers.length; i++){
			const subscriber = this.subscribers[i]; //For scope
			this.pubSub.subscribe(this.EventTypes.surveyCompleted, function(data){
				subscriber.surveyCompleted(data, _store);
			});
		}	
	}	
}
