import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IncentiveAction, IncentiveActionTypes } from '../actions/actions';

export interface State {
	money: number;
	power: number;
}

export function moneyReducer(state: number = 0, action: IncentiveAction): number {
	switch (action.type) {
		case IncentiveActionTypes.AddMoney:
			return state + action.payload.amount;
	}
	return state;
}

export function powerReducer(state: number = 0, action: IncentiveAction): number {
	switch (action.type) {
		case IncentiveActionTypes.AddPower:
			return state + action.payload.amount;
	}
	return state;
}

export const reducers: ActionReducerMap<State> = {
	money: moneyReducer,
	power: powerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectMoney = (state: State) => state.money;
export const selectPower = (state: State) => state.power;
