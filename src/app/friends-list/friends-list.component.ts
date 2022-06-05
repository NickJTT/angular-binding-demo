import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'friends-list',
  template: `
    <p>Friends List:</p>
    <ul *ngFor='let friend of friends'>
      <li>{{friend.name}}</li>
    <ul>
    {{errorMessage}}
  `
})
export class FriendsListComponent implements OnInit {
  public friends: any = [];
  public errorMessage: string = ''

  constructor(private readonly friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(data => this.friends = data,
      error => this.errorMessage = error);
  }
}
