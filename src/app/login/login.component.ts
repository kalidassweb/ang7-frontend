import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;

    this.httpClient.post('api-token-auth/', this.loginForm.value).subscribe(
      (data: any) => {
        let set: any = this.loginForm.value;
        set.password = data.token;

        this.authenticationService
          .login(set)
          .pipe(
            finalize(() => {
              this.loginForm.markAsPristine();
              this.isLoading = false;
            })
          )
          .subscribe(
            credentials => {
              log.debug(`${credentials.username} successfully logged in`);
              this.route.queryParams.subscribe(params =>
                this.router.navigate([params.redirect || '/'], { replaceUrl: true })
              );
            },
            error => {
              log.debug(`Login error: ${error}`);
              this.error = error;
            }
          );
      },
      error => {
        log.debug(`Login error: ${error}`);
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }
}
