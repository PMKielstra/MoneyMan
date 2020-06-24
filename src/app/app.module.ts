import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncentivesListComponent } from './incentives-list/incentives-list.component';
import { IncentivesEditorComponent } from './incentives-editor/incentives-editor.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';

@NgModule({
  declarations: [
    AppComponent,
    IncentivesListComponent,
    IncentivesEditorComponent
  ],
  imports: [
    FormsModule,
    NgxPubSubModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
