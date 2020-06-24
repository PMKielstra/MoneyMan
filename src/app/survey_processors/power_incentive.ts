import { Survey, Incentive } from './survey_processors'

import { AddPowerAction } from '../actions/actions';

export class PowerIncentive implements Incentive {
	constructor(){}
	getIncentive(survey: Survey){ return new AddPowerAction({amount: survey.power * (Math.random() - 0.5) }); } //Power is fleeting and unpredictable.  Also, this demonstrates how Incentives can use complex logic that would not be allowed in a pure selector function.
}

