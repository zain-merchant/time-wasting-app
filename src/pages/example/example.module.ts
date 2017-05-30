import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamplePage } from './example';

@NgModule({
  declarations: [
    ExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(ExamplePage),
  ],
  exports: [
    ExamplePage
  ]
})
export class ExamplePageModule {}
