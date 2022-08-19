import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private routerService: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      (res) => {
        console.log(`Succesfully authenticated!`);
        console.log(res);
        this.routerService.navigateByUrl('animals');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
