import { Survey, SurveySubscriber } from './survey_processors'
import { Store } from '@ngrx/store'
import { State } from '../reducers/index'

import { AddPowerAction } from '../actions/actions';

export class PowerIncentive implements SurveySubscriber {
	constructor(){}
	surveyCompleted(survey: Survey, store: Store<State>){ store.dispatch(new AddPowerAction({amount: survey.power * (Math.random() - 0.5) })); } //Power is fleeting and unpredictable.  Also, this demonstrates how Incentives can use complex logic that would not be allowed in a pure selector function.
}

