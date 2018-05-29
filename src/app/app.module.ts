import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BodyholderComponent } from './bodyholder/bodyholder.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyholderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
   {
      path: 'case-1',
      component: BodyholderComponent
   },{
      path: 'case-2',
      component: BodyholderComponent
   },{
      path: 'case-3',
      component: BodyholderComponent
   },{
      path: 'case-4',
      component: BodyholderComponent
   },{
      path: 'case-5',
      component: BodyholderComponent
   }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
