import { Survey, Incentive } from './survey_processors'

import { AddPowerAction } from '../actions/actions';

export class PowerIncentive implements Incentive {
	constructor(){}
	getIncentive(survey: Survey){ return new AddPowerAction({amount: survey.power}); }
}

