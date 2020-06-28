import { Survey, SurveySubscriber } from './survey_processors'
import { Store } from '@ngrx/store'
import { State } from '../reducers/index'

import { AddMoneyAction } from '../actions/actions';

export class MoneyIncentive implements SurveySubscriber {
	constructor(){}
	surveyCompleted(survey: Survey, store: Store<State>){ store.dispatch(new AddMoneyAction({amount: survey.money})); }
}
