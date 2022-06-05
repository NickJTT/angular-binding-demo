import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendsService } from './friends.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
