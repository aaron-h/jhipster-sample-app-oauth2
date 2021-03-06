import { Component, OnInit } from '@angular/core';

import { LoginService, AccountService, Account } from 'app/core';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
  account: Account;

  constructor(private accountService: AccountService, private loginService: LoginService) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.account = account;
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.loginService.login();
  }
}
