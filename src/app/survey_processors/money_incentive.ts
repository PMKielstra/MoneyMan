import { Survey, Incentive } from './survey_processors'

import { AddMoneyAction } from '../actions/actions';

export class MoneyIncentive implements Incentive {
	constructor(){}
	getIncentive(survey: Survey){ return new AddMoneyAction({amount: survey.money}); }
}
