import { LoginState, Repository } from '@sensenet/client-core';
import { loginState } from '@sensenet/redux/dist/Reducers';
import { computedFrom, observable } from 'aurelia-binding';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class AuthService {

  @observable loginState: LoginState;
  constructor(private readonly repository: Repository,
    private readonly router: Router) {
    this.repository.authentication.state.subscribe(state => {
      this.loginState = state;
    });
    if (!this.loginState) {
      this.loginState = this.repository.authentication.state.getValue();
    }
  }

  @computedFrom('loginState')
  get isAuthenticated() {
    return this.loginState === LoginState.Authenticated;
  }

  loginStateChanged(newState: LoginState) {
    if (!this.router.currentInstruction) {
      return;
    }
    switch (newState) {
      case LoginState.Authenticated:
        this.router.currentInstruction.fragment !== '/home' && this.router.navigate('/home');
        break;
      case LoginState.Unauthenticated:
        this.router.currentInstruction.fragment !== '/login' && this.router.navigate('/login');
        break;
    }
  }
}
