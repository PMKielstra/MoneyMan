import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, selectMoney, selectPower } from '../reducers/index';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-incentives-list',
	templateUrl: './incentives-list.component.html',
	styleUrls: ['./incentives-list.component.css']
})
export class IncentivesListComponent implements OnInit {

	money$: Observable<number>;
	power$: Observable<number>;

	constructor(private store: Store<State>) { }

	ngOnInit(): void {
		this.money$ = this.store.pipe(select(selectMoney));
		this.power$ = this.store.pipe(select(selectPower));
	}

}
