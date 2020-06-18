import { Action } from '@ngrx/store';

export enum IncentiveActionTypes {
  AddMoney = '[Money] Add Money',
  AddPower = '[Power] Add Power'
}

export class IncentiveAction implements Action {
  readonly type: string;
  readonly payload: {amount: number}
}

export class AddMoneyAction implements Action {
  readonly type = IncentiveActionTypes.AddMoney;
  constructor(readonly payload: {amount: number}){}
}

export class AddPowerAction implements Action {
  readonly type = IncentiveActionTypes.AddPower;
  constructor(readonly payload: {amount: number}){}
}

export type IncentiveActions = AddMoneyAction | AddPowerAction;
