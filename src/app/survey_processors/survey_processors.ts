import { Action } from '@ngrx/store'

export interface Survey {
	money: number;
	power: number;
}

export interface Incentive {
	getIncentive(survey: Survey): Action;
}
