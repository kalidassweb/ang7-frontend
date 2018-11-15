import { Injectable } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { AuthenticationService } from '../authentication/authentication.service';
/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;

    let headers;

    if (request.url === 'api-token-auth/') {
      headers = request.headers.set('Content-Type', 'application/json');
    } else {
      if (this.authService.isAuthenticated()) {
        headers = request.headers
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${this.authService.getToken()}`);
      } else {
        this.authService.logout();
        return;
      }
    }

    request = request.clone({ headers, url: environment.serverUrl + request.url });
    return next.handle(request);
  }
}
