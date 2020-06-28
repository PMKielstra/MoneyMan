import { Action, Store } from '@ngrx/store'
import { State } from '../reducers/index'

export interface Survey {
	money: number;
	power: number;
}

export interface SurveySubscriber {
	surveyCompleted(survey: Survey, store: Store<State>);
}
