(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './src/$$_lazy_route_resource lazy recursive':
      /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var map = {
          'app/about/about.module': ['./src/app/about/about.module.ts', 'app-about-about-module']
        };
        function webpackAsyncContext(req) {
          var ids = map[req];
          if (!ids) {
            return Promise.resolve().then(function() {
              var e = new Error("Cannot find module '" + req + "'");
              e.code = 'MODULE_NOT_FOUND';
              throw e;
            });
          }
          return __webpack_require__.e(ids[1]).then(function() {
            var id = ids[0];
            return __webpack_require__(id);
          });
        }
        webpackAsyncContext.keys = function webpackAsyncContextKeys() {
          return Object.keys(map);
        };
        webpackAsyncContext.id = './src/$$_lazy_route_resource lazy recursive';
        module.exports = webpackAsyncContext;

        /***/
      },

    /***/ './src/app/app-routing.module.ts':
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function() {
          return AppRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/shell/shell.service */ './src/app/shell/shell.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var routes = [
          _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__['Shell'].childRoutes([
            { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
          ]),
          // Fallback when no prior route is matched
          { path: '**', redirectTo: '', pathMatch: 'full' }
        ];
        var AppRoutingModule = /** @class */ (function() {
          function AppRoutingModule() {}
          AppRoutingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes, {
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__['PreloadAllModules']
                  })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                providers: []
              })
            ],
            AppRoutingModule
          );
          return AppRoutingModule;
        })();

        /***/
      },

    /***/ './src/app/app.component.html':
      /*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<router-outlet></router-outlet>\n<ng-http-loader [backgroundColor]="\'#2980b9\'" [debounceDelay]="100" [minDuration]="300"> </ng-http-loader>\n';

        /***/
      },

    /***/ './src/app/app.component.scss':
      /*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var log = new _app_core__WEBPACK_IMPORTED_MODULE_7__['Logger']('App');
        var AppComponent = /** @class */ (function() {
          function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.titleService = titleService;
            this.translateService = translateService;
            this.i18nService = i18nService;
          }
          AppComponent.prototype.ngOnInit = function() {
            var _this = this;
            // Setup logger
            if (_env_environment__WEBPACK_IMPORTED_MODULE_6__['environment'].production) {
              _app_core__WEBPACK_IMPORTED_MODULE_7__['Logger'].enableProductionMode();
            }
            log.debug('init');
            // Setup translations
            this.i18nService.init(
              _env_environment__WEBPACK_IMPORTED_MODULE_6__['environment'].defaultLanguage,
              _env_environment__WEBPACK_IMPORTED_MODULE_6__['environment'].supportedLanguages
            );
            var onNavigationEnd = this.router.events.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['filter'])(function(event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__['NavigationEnd'];
              })
            );
            // Change page title on navigation or language change, based on route data
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['merge'])(this.translateService.onLangChange, onNavigationEnd)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['map'])(function() {
                  var route = _this.activatedRoute;
                  while (route.firstChild) {
                    route = route.firstChild;
                  }
                  return route;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['filter'])(function(route) {
                  return route.outlet === 'primary';
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__['mergeMap'])(function(route) {
                  return route.data;
                })
              )
              .subscribe(function(event) {
                var title = event['title'];
                if (title) {
                  _this.titleService.setTitle(_this.translateService.instant(title));
                }
              });
          };
          AppComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-root',
                template: __webpack_require__(/*! ./app.component.html */ './src/app/app.component.html'),
                styles: [__webpack_require__(/*! ./app.component.scss */ './src/app/app.component.scss')]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__['Title'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__['TranslateService'],
                _app_core__WEBPACK_IMPORTED_MODULE_7__['I18nService']
              ])
            ],
            AppComponent
          );
          return AppComponent;
        })();

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/service-worker */ './node_modules/@angular/service-worker/fesm5/service-worker.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ './node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js'
        );
        /* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ng-http-loader */ './node_modules/ng-http-loader/fesm5/ng-http-loader.js'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        /* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @app/shared */ './src/app/shared/index.ts'
        );
        /* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./home/home.module */ './src/app/home/home.module.ts'
        );
        /* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./shell/shell.module */ './src/app/shell/shell.module.ts'
        );
        /* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./login/login.module */ './src/app/login/login.module.ts'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./app-routing.module */ './src/app/app-routing.module.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var AppModule = /** @class */ (function() {
          function AppModule() {}
          AppModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                  _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__['ServiceWorkerModule'].register(
                    './ngsw-worker.js',
                    { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_8__['environment'].production }
                  ),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClientModule'],
                  ng_http_loader__WEBPACK_IMPORTED_MODULE_7__['NgHttpLoaderModule'],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__['TranslateModule'].forRoot(),
                  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__['NgbModule'],
                  _app_core__WEBPACK_IMPORTED_MODULE_9__['CoreModule'],
                  _app_shared__WEBPACK_IMPORTED_MODULE_10__['SharedModule'],
                  _shell_shell_module__WEBPACK_IMPORTED_MODULE_12__['ShellModule'],
                  _home_home_module__WEBPACK_IMPORTED_MODULE_11__['HomeModule'],
                  _login_login_module__WEBPACK_IMPORTED_MODULE_13__['LoginModule'],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_15__['AppRoutingModule'] // must be imported as the last module as it contains the fallback route
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__['AppComponent']],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__['AppComponent']]
              })
            ],
            AppModule
          );
          return AppModule;
        })();

        /***/
      },

    /***/ './src/app/core/authentication/authentication.guard.ts':
      /*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
      /*! exports provided: AuthenticationGuard */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AuthenticationGuard', function() {
          return AuthenticationGuard;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../logger.service */ './src/app/core/logger.service.ts'
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./authentication.service */ './src/app/core/authentication/authentication.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__['Logger']('AuthenticationGuard');
        var AuthenticationGuard = /** @class */ (function() {
          function AuthenticationGuard(router, authenticationService) {
            this.router = router;
            this.authenticationService = authenticationService;
          }
          AuthenticationGuard.prototype.canActivate = function(route, state) {
            if (this.authenticationService.isAuthenticated()) {
              return true;
            }
            log.debug('Not authenticated, redirecting and adding redirect url...');
            this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
            return false;
          };
          AuthenticationGuard = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _authentication_service__WEBPACK_IMPORTED_MODULE_3__['AuthenticationService']
              ])
            ],
            AuthenticationGuard
          );
          return AuthenticationGuard;
        })();

        /***/
      },

    /***/ './src/app/core/authentication/authentication.service.mock.ts':
      /*!********************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.mock.ts ***!
  \********************************************************************/
      /*! exports provided: MockAuthenticationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MockAuthenticationService',
          function() {
            return MockAuthenticationService;
          }
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );

        var MockAuthenticationService = /** @class */ (function() {
          function MockAuthenticationService() {
            this.credentials = {
              username: 'test',
              token: '123'
            };
          }
          MockAuthenticationService.prototype.login = function(context) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['of'])({
              username: context.username,
              token: '123456'
            });
          };
          MockAuthenticationService.prototype.logout = function() {
            this.credentials = null;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['of'])(true);
          };
          MockAuthenticationService.prototype.isAuthenticated = function() {
            return !!this.credentials;
          };
          return MockAuthenticationService;
        })();

        /***/
      },

    /***/ './src/app/core/authentication/authentication.service.ts':
      /*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
      /*! exports provided: AuthenticationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AuthenticationService', function() {
          return AuthenticationService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var credentialsKey = 'credentials';
        /**
         * Provides a base for authentication workflow.
         * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
         */
        var AuthenticationService = /** @class */ (function() {
          function AuthenticationService() {
            var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
            if (savedCredentials) {
              this._credentials = JSON.parse(savedCredentials);
            }
          }
          /**
           * Authenticates the user.
           * @param context The login parameters.
           * @return The user credentials.
           */
          AuthenticationService.prototype.login = function(context) {
            // Replace by proper authentication call
            var data = {
              username: context.username,
              token: context.password
            };
            this.setCredentials(data, context.remember);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(data);
          };
          AuthenticationService.prototype.getToken = function() {
            return this.credentials.token;
          };
          /**
           * Logs out the user and clear credentials.
           * @return True if the user was logged out successfully.
           */
          AuthenticationService.prototype.logout = function() {
            // Customize credentials invalidation here
            this.setCredentials();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['of'])(true);
          };
          /**
           * Checks is the user is authenticated.
           * @return True if the user is authenticated.
           */
          AuthenticationService.prototype.isAuthenticated = function() {
            return !!this.credentials;
          };
          Object.defineProperty(AuthenticationService.prototype, 'credentials', {
            /**
             * Gets the user credentials.
             * @return The user credentials or null if the user is not authenticated.
             */
            get: function() {
              return this._credentials;
            },
            enumerable: true,
            configurable: true
          });
          /**
           * Sets the user credentials.
           * The credentials may be persisted across sessions by setting the `remember` parameter to true.
           * Otherwise, the credentials are only persisted for the current session.
           * @param credentials The user credentials.
           * @param remember True to remember credentials across sessions.
           */
          AuthenticationService.prototype.setCredentials = function(credentials, remember) {
            this._credentials = credentials || null;
            if (credentials) {
              var storage = remember ? localStorage : sessionStorage;
              storage.setItem(credentialsKey, JSON.stringify(credentials));
            } else {
              sessionStorage.removeItem(credentialsKey);
              localStorage.removeItem(credentialsKey);
            }
          };
          AuthenticationService = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(), __metadata('design:paramtypes', [])],
            AuthenticationService
          );
          return AuthenticationService;
        })();

        /***/
      },

    /***/ './src/app/core/core.module.ts':
      /*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
      /*! exports provided: CoreModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CoreModule', function() {
          return CoreModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./route-reusable-strategy */ './src/app/core/route-reusable-strategy.ts'
        );
        /* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./authentication/authentication.service */ './src/app/core/authentication/authentication.service.ts'
        );
        /* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./authentication/authentication.guard */ './src/app/core/authentication/authentication.guard.ts'
        );
        /* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./i18n.service */ './src/app/core/i18n.service.ts'
        );
        /* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./http/http.service */ './src/app/core/http/http.service.ts'
        );
        /* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./http/http-cache.service */ './src/app/core/http/http-cache.service.ts'
        );
        /* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./http/api-prefix.interceptor */ './src/app/core/http/api-prefix.interceptor.ts'
        );
        /* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./http/error-handler.interceptor */ './src/app/core/http/error-handler.interceptor.ts'
        );
        /* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./http/cache.interceptor */ './src/app/core/http/cache.interceptor.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };
        var __param =
          (undefined && undefined.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };

        var CoreModule = /** @class */ (function() {
          function CoreModule(parentModule) {
            // Import guard
            if (parentModule) {
              throw new Error(parentModule + ' has already been loaded. Import Core module in the AppModule only.');
            }
          }
          CoreModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClientModule'],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateModule'],
                  _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule']
                ],
                providers: [
                  _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__['AuthenticationService'],
                  _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__['AuthenticationGuard'],
                  _i18n_service__WEBPACK_IMPORTED_MODULE_8__['I18nService'],
                  _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__['HttpCacheService'],
                  _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__['ApiPrefixInterceptor'],
                  _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__['ErrorHandlerInterceptor'],
                  _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__['CacheInterceptor'],
                  {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClient'],
                    useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_9__['HttpService']
                  },
                  {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouteReuseStrategy'],
                    useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__['RouteReusableStrategy']
                  }
                ]
              }),
              __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'])()),
              __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['SkipSelf'])()),
              __metadata('design:paramtypes', [CoreModule])
            ],
            CoreModule
          );
          return CoreModule;
        })();

        /***/
      },

    /***/ './src/app/core/http/api-prefix.interceptor.ts':
      /*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
      /*! exports provided: ApiPrefixInterceptor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ApiPrefixInterceptor', function() {
          return ApiPrefixInterceptor;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../authentication/authentication.service */ './src/app/core/authentication/authentication.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        /**
         * Prefixes all requests with `environment.serverUrl`.
         */
        var ApiPrefixInterceptor = /** @class */ (function() {
          function ApiPrefixInterceptor(authService) {
            this.authService = authService;
          }
          ApiPrefixInterceptor.prototype.intercept = function(request, next) {
            debugger;
            var headers;
            if (request.url === 'api-token-auth/') {
              headers = request.headers.set('Content-Type', 'application/json');
            } else {
              if (this.authService.isAuthenticated()) {
                headers = request.headers
                  .set('Content-Type', 'application/json')
                  .set('Authorization', 'Bearer ' + this.authService.getToken());
              } else {
                this.authService.logout();
                return;
              }
            }
            request = request.clone({
              headers: headers,
              url: _env_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].serverUrl + request.url
            });
            return next.handle(request);
          };
          ApiPrefixInterceptor = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__['AuthenticationService']
              ])
            ],
            ApiPrefixInterceptor
          );
          return ApiPrefixInterceptor;
        })();

        /***/
      },

    /***/ './src/app/core/http/cache.interceptor.ts':
      /*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
      /*! exports provided: CacheInterceptor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CacheInterceptor', function() {
          return CacheInterceptor;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./http-cache.service */ './src/app/core/http/http-cache.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        /**
         * Caches HTTP requests.
         * Use ExtendedHttpClient fluent API to configure caching for each request.
         */
        var CacheInterceptor = /** @class */ (function() {
          function CacheInterceptor(httpCacheService) {
            this.httpCacheService = httpCacheService;
            this.forceUpdate = false;
          }
          CacheInterceptor_1 = CacheInterceptor;
          /**
           * Configures interceptor options
           * @param options If update option is enabled, forces request to be made and updates cache entry.
           * @return The configured instance.
           */
          CacheInterceptor.prototype.configure = function(options) {
            var instance = new CacheInterceptor_1(this.httpCacheService);
            if (options && options.update) {
              instance.forceUpdate = true;
            }
            return instance;
          };
          CacheInterceptor.prototype.intercept = function(request, next) {
            var _this = this;
            if (request.method !== 'GET') {
              return next.handle(request);
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__['Observable'](function(subscriber) {
              var cachedData = _this.forceUpdate ? null : _this.httpCacheService.getCacheData(request.urlWithParams);
              if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpResponse'](cachedData));
                subscriber.complete();
              } else {
                next.handle(request).subscribe(
                  function(event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpResponse']) {
                      _this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                  },
                  function(error) {
                    return subscriber.error(error);
                  },
                  function() {
                    return subscriber.complete();
                  }
                );
              }
            });
          };
          var CacheInterceptor_1;
          CacheInterceptor = CacheInterceptor_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [_http_cache_service__WEBPACK_IMPORTED_MODULE_3__['HttpCacheService']])
            ],
            CacheInterceptor
          );
          return CacheInterceptor;
        })();

        /***/
      },

    /***/ './src/app/core/http/error-handler.interceptor.ts':
      /*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
      /*! exports provided: ErrorHandlerInterceptor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ErrorHandlerInterceptor',
          function() {
            return ErrorHandlerInterceptor;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../logger.service */ './src/app/core/logger.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__['Logger']('ErrorHandlerInterceptor');
        /**
         * Adds a default error handler to all requests.
         */
        var ErrorHandlerInterceptor = /** @class */ (function() {
          function ErrorHandlerInterceptor() {}
          ErrorHandlerInterceptor.prototype.intercept = function(request, next) {
            var _this = this;
            return next.handle(request).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['catchError'])(function(error) {
                return _this.errorHandler(error);
              })
            );
          };
          // Customize the default error handler here if needed
          ErrorHandlerInterceptor.prototype.errorHandler = function(response) {
            if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__['environment'].production) {
              // Do something with the error
              log.error('Request error', response);
            }
            throw response;
          };
          ErrorHandlerInterceptor = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])()],
            ErrorHandlerInterceptor
          );
          return ErrorHandlerInterceptor;
        })();

        /***/
      },

    /***/ './src/app/core/http/http-cache.service.ts':
      /*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
      /*! exports provided: HttpCacheService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HttpCacheService', function() {
          return HttpCacheService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! lodash */ './node_modules/lodash/lodash.js'
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../logger.service */ './src/app/core/logger.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__['Logger']('HttpCacheService');
        var cachePersistenceKey = 'httpCache';
        /**
         * Provides a cache facility for HTTP requests with configurable persistence policy.
         */
        var HttpCacheService = /** @class */ (function() {
          function HttpCacheService() {
            this.cachedData = {};
            this.storage = null;
            this.loadCacheData();
          }
          /**
           * Sets the cache data for the specified request.
           * @param url The request URL.
           * @param data The received data.
           * @param lastUpdated The cache last update, current date is used if not specified.
           */
          HttpCacheService.prototype.setCacheData = function(url, data, lastUpdated) {
            this.cachedData[url] = {
              lastUpdated: lastUpdated || new Date(),
              data: data
            };
            log.debug('Cache set for key: "' + url + '"');
            this.saveCacheData();
          };
          /**
           * Gets the cached data for the specified request.
           * @param url The request URL.
           * @return The cached data or null if no cached data exists for this request.
           */
          HttpCacheService.prototype.getCacheData = function(url) {
            var cacheEntry = this.cachedData[url];
            if (cacheEntry) {
              log.debug('Cache hit for key: "' + url + '"');
              return cacheEntry.data;
            }
            return null;
          };
          /**
           * Gets the cached entry for the specified request.
           * @param url The request URL.
           * @return The cache entry or null if no cache entry exists for this request.
           */
          HttpCacheService.prototype.getHttpCacheEntry = function(url) {
            return this.cachedData[url] || null;
          };
          /**
           * Clears the cached entry (if exists) for the specified request.
           * @param url The request URL.
           */
          HttpCacheService.prototype.clearCache = function(url) {
            delete this.cachedData[url];
            log.debug('Cache cleared for key: "' + url + '"');
            this.saveCacheData();
          };
          /**
           * Cleans cache entries older than the specified date.
           * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
           */
          HttpCacheService.prototype.cleanCache = function(expirationDate) {
            var _this = this;
            if (expirationDate) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_1__['each'])(this.cachedData, function(value, key) {
                if (expirationDate >= value.lastUpdated) {
                  delete _this.cachedData[key];
                }
              });
            } else {
              this.cachedData = {};
            }
            this.saveCacheData();
          };
          /**
           * Sets the cache persistence policy.
           * Note that changing the cache persistence will also clear the cache from its previous storage.
           * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
           *   provided it will be only in-memory (default).
           */
          HttpCacheService.prototype.setPersistence = function(persistence) {
            this.cleanCache();
            this.storage =
              persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
            this.loadCacheData();
          };
          HttpCacheService.prototype.saveCacheData = function() {
            if (this.storage) {
              this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
            }
          };
          HttpCacheService.prototype.loadCacheData = function() {
            var data = this.storage ? this.storage[cachePersistenceKey] : null;
            this.cachedData = data ? JSON.parse(data) : {};
          };
          HttpCacheService = __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(), __metadata('design:paramtypes', [])],
            HttpCacheService
          );
          return HttpCacheService;
        })();

        /***/
      },

    /***/ './src/app/core/http/http.service.ts':
      /*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
      /*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HTTP_DYNAMIC_INTERCEPTORS',
          function() {
            return HTTP_DYNAMIC_INTERCEPTORS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HttpService', function() {
          return HttpService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./error-handler.interceptor */ './src/app/core/http/error-handler.interceptor.ts'
        );
        /* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./cache.interceptor */ './src/app/core/http/cache.interceptor.ts'
        );
        /* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./api-prefix.interceptor */ './src/app/core/http/api-prefix.interceptor.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };
        var __param =
          (undefined && undefined.__param) ||
          function(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          };

        // From @angular/common/http/src/interceptor: allows to chain interceptors
        var HttpInterceptorHandler = /** @class */ (function() {
          function HttpInterceptorHandler(next, interceptor) {
            this.next = next;
            this.interceptor = interceptor;
          }
          HttpInterceptorHandler.prototype.handle = function(request) {
            return this.interceptor.intercept(request, this.next);
          };
          return HttpInterceptorHandler;
        })();
        /**
         * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
         * Except for very specific needs, you should better configure these interceptors directly in the constructor below
         * for better readability.
         *
         * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
         * HTTP_INTERCEPTORS token.
         */
        var HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['InjectionToken'](
          'HTTP_DYNAMIC_INTERCEPTORS'
        );
        /**
         * Extends HttpClient with per request configuration using dynamic interceptors.
         */
        var HttpService = /** @class */ (function(_super) {
          __extends(HttpService, _super);
          function HttpService(httpHandler, injector, interceptors) {
            if (interceptors === void 0) {
              interceptors = [];
            }
            var _this = _super.call(this, httpHandler) || this;
            _this.httpHandler = httpHandler;
            _this.injector = injector;
            _this.interceptors = interceptors;
            if (!_this.interceptors) {
              // Configure default interceptors that can be disabled here
              _this.interceptors = [
                _this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__['ApiPrefixInterceptor']),
                _this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__['ErrorHandlerInterceptor'])
              ];
            }
            return _this;
          }
          HttpService_1 = HttpService;
          HttpService.prototype.cache = function(forceUpdate) {
            var cacheInterceptor = this.injector
              .get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__['CacheInterceptor'])
              .configure({ update: forceUpdate });
            return this.addInterceptor(cacheInterceptor);
          };
          HttpService.prototype.skipErrorHandler = function() {
            return this.removeInterceptor(
              _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__['ErrorHandlerInterceptor']
            );
          };
          HttpService.prototype.disableApiPrefix = function() {
            return this.removeInterceptor(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__['ApiPrefixInterceptor']);
          };
          // Override the original method to wire interceptors when triggering the request.
          HttpService.prototype.request = function(method, url, options) {
            var handler = this.interceptors.reduceRight(function(next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.httpHandler);
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'](handler).request(
              method,
              url,
              options
            );
          };
          HttpService.prototype.removeInterceptor = function(interceptorType) {
            return new HttpService_1(
              this.httpHandler,
              this.injector,
              this.interceptors.filter(function(i) {
                return !(i instanceof interceptorType);
              })
            );
          };
          HttpService.prototype.addInterceptor = function(interceptor) {
            return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
          };
          var HttpService_1;
          HttpService = HttpService_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'])()),
              __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'])(HTTP_DYNAMIC_INTERCEPTORS)),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpHandler'],
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injector'],
                Array
              ])
            ],
            HttpService
          );
          return HttpService;
        })(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient']);

        /***/
      },

    /***/ './src/app/core/i18n.service.ts':
      /*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
      /*! exports provided: extract, I18nService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'extract', function() {
          return extract;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'I18nService', function() {
          return I18nService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! lodash */ './node_modules/lodash/lodash.js'
        );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          lodash__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./logger.service */ './src/app/core/logger.service.ts'
        );
        /* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../translations/en-US.json */ './src/translations/en-US.json'
        );
        var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../translations/en-US.json */ './src/translations/en-US.json',
          1
        );
        /* harmony import */ var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../translations/fr-FR.json */ './src/translations/fr-FR.json'
        );
        var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../translations/fr-FR.json */ './src/translations/fr-FR.json',
          1
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__['Logger']('I18nService');
        var languageKey = 'language';
        /**
         * Pass-through function to mark a string for translation extraction.
         * Running `npm translations:extract` will include the given string by using this.
         * @param s The string to extract for translation.
         * @return The same string.
         */
        function extract(s) {
          return s;
        }
        var I18nService = /** @class */ (function() {
          function I18nService(translateService) {
            this.translateService = translateService;
            // Embed languages to avoid extra HTTP requests
            translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__);
            translateService.setTranslation('fr-FR', _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__);
          }
          /**
           * Initializes i18n for the application.
           * Loads language from local storage if present, or sets default language.
           * @param defaultLanguage The default language to use.
           * @param supportedLanguages The list of supported languages.
           */
          I18nService.prototype.init = function(defaultLanguage, supportedLanguages) {
            this.defaultLanguage = defaultLanguage;
            this.supportedLanguages = supportedLanguages;
            this.language = '';
            this.translateService.onLangChange.subscribe(function(event) {
              localStorage.setItem(languageKey, event.lang);
            });
          };
          Object.defineProperty(I18nService.prototype, 'language', {
            /**
             * Gets the current language.
             * @return The current language code.
             */
            get: function() {
              return this.translateService.currentLang;
            },
            /**
             * Sets the current language.
             * Note: The current language is saved to the local storage.
             * If no parameter is specified, the language is loaded from local storage (if present).
             * @param language The IETF language code to set.
             */
            set: function(language) {
              language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
              var isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_2__['includes'])(
                this.supportedLanguages,
                language
              );
              // If no exact match is found, search without the region
              if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language =
                  this.supportedLanguages.find(function(supportedLanguage) {
                    return supportedLanguage.startsWith(language);
                  }) || '';
                isSupportedLanguage = Boolean(language);
              }
              // Fallback if language is not supported
              if (!isSupportedLanguage) {
                language = this.defaultLanguage;
              }
              log.debug('Language set to ' + language);
              this.translateService.use(language);
            },
            enumerable: true,
            configurable: true
          });
          I18nService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']])
            ],
            I18nService
          );
          return I18nService;
        })();

        /***/
      },

    /***/ './src/app/core/index.ts':
      /*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
      /*! exports provided: CoreModule, AuthenticationService, MockAuthenticationService, AuthenticationGuard, extract, I18nService, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, ApiPrefixInterceptor, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./core.module */ './src/app/core/core.module.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'CoreModule', function() {
          return _core_module__WEBPACK_IMPORTED_MODULE_0__['CoreModule'];
        });

        /* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./authentication/authentication.service */ './src/app/core/authentication/authentication.service.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'AuthenticationService', function() {
          return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__['AuthenticationService'];
        });

        /* harmony import */ var _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./authentication/authentication.service.mock */ './src/app/core/authentication/authentication.service.mock.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MockAuthenticationService',
          function() {
            return _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__[
              'MockAuthenticationService'
            ];
          }
        );

        /* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./authentication/authentication.guard */ './src/app/core/authentication/authentication.guard.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'AuthenticationGuard', function() {
          return _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__['AuthenticationGuard'];
        });

        /* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./i18n.service */ './src/app/core/i18n.service.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'extract', function() {
          return _i18n_service__WEBPACK_IMPORTED_MODULE_4__['extract'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'I18nService', function() {
          return _i18n_service__WEBPACK_IMPORTED_MODULE_4__['I18nService'];
        });

        /* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./http/http.service */ './src/app/core/http/http.service.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HTTP_DYNAMIC_INTERCEPTORS',
          function() {
            return _http_http_service__WEBPACK_IMPORTED_MODULE_5__['HTTP_DYNAMIC_INTERCEPTORS'];
          }
        );

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'HttpService', function() {
          return _http_http_service__WEBPACK_IMPORTED_MODULE_5__['HttpService'];
        });

        /* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./http/http-cache.service */ './src/app/core/http/http-cache.service.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'HttpCacheService', function() {
          return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__['HttpCacheService'];
        });

        /* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./http/api-prefix.interceptor */ './src/app/core/http/api-prefix.interceptor.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'ApiPrefixInterceptor', function() {
          return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__['ApiPrefixInterceptor'];
        });

        /* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./http/cache.interceptor */ './src/app/core/http/cache.interceptor.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'CacheInterceptor', function() {
          return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__['CacheInterceptor'];
        });

        /* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./http/error-handler.interceptor */ './src/app/core/http/error-handler.interceptor.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'ErrorHandlerInterceptor', function() {
          return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__['ErrorHandlerInterceptor'];
        });

        /* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./route-reusable-strategy */ './src/app/core/route-reusable-strategy.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'RouteReusableStrategy', function() {
          return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__['RouteReusableStrategy'];
        });

        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./logger.service */ './src/app/core/logger.service.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'LogLevel', function() {
          return _logger_service__WEBPACK_IMPORTED_MODULE_11__['LogLevel'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Logger', function() {
          return _logger_service__WEBPACK_IMPORTED_MODULE_11__['Logger'];
        });

        /***/
      },

    /***/ './src/app/core/logger.service.ts':
      /*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
      /*! exports provided: LogLevel, Logger */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LogLevel', function() {
          return LogLevel;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Logger', function() {
          return Logger;
        });
        /**
         * Simple logger system with the possibility of registering custom outputs.
         *
         * 4 different log levels are provided, with corresponding methods:
         * - debug   : for debug information
         * - info    : for informative status of the application (success, ...)
         * - warning : for non-critical errors that do not prevent normal application behavior
         * - error   : for critical errors that prevent normal application behavior
         *
         * Example usage:
         * ```
         * import { Logger } from 'app/core/logger.service';
         *
         * const log = new Logger('myFile');
         * ...
         * log.debug('something happened');
         * ```
         *
         * To disable debug and info logs in production, add this snippet to your root component:
         * ```
         * export class AppComponent implements OnInit {
         *   ngOnInit() {
         *     if (environment.production) {
         *       Logger.enableProductionMode();
         *     }
         *     ...
         *   }
         * }
         *
         * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
         */
        /**
         * The possible log levels.
         * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
         */
        var LogLevel;
        (function(LogLevel) {
          LogLevel[(LogLevel['Off'] = 0)] = 'Off';
          LogLevel[(LogLevel['Error'] = 1)] = 'Error';
          LogLevel[(LogLevel['Warning'] = 2)] = 'Warning';
          LogLevel[(LogLevel['Info'] = 3)] = 'Info';
          LogLevel[(LogLevel['Debug'] = 4)] = 'Debug';
        })(LogLevel || (LogLevel = {}));
        var Logger = /** @class */ (function() {
          function Logger(source) {
            this.source = source;
          }
          /**
           * Enables production mode.
           * Sets logging level to LogLevel.Warning.
           */
          Logger.enableProductionMode = function() {
            Logger.level = LogLevel.Warning;
          };
          /**
           * Logs messages or objects  with the debug level.
           * Works the same as console.log().
           */
          Logger.prototype.debug = function() {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              objects[_i] = arguments[_i];
            }
            this.log(console.log, LogLevel.Debug, objects);
          };
          /**
           * Logs messages or objects  with the info level.
           * Works the same as console.log().
           */
          Logger.prototype.info = function() {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              objects[_i] = arguments[_i];
            }
            this.log(console.info, LogLevel.Info, objects);
          };
          /**
           * Logs messages or objects  with the warning level.
           * Works the same as console.log().
           */
          Logger.prototype.warn = function() {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              objects[_i] = arguments[_i];
            }
            this.log(console.warn, LogLevel.Warning, objects);
          };
          /**
           * Logs messages or objects  with the error level.
           * Works the same as console.log().
           */
          Logger.prototype.error = function() {
            var objects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              objects[_i] = arguments[_i];
            }
            this.log(console.error, LogLevel.Error, objects);
          };
          Logger.prototype.log = function(func, level, objects) {
            var _this = this;
            if (level <= Logger.level) {
              var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
              func.apply(console, log);
              Logger.outputs.forEach(function(output) {
                return output.apply(output, [_this.source, level].concat(objects));
              });
            }
          };
          /**
           * Current logging level.
           * Set it to LogLevel.Off to disable logs completely.
           */
          Logger.level = LogLevel.Debug;
          /**
           * Additional log outputs.
           */
          Logger.outputs = [];
          return Logger;
        })();

        /***/
      },

    /***/ './src/app/core/route-reusable-strategy.ts':
      /*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
      /*! exports provided: RouteReusableStrategy */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'RouteReusableStrategy', function() {
          return RouteReusableStrategy;
        });
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();

        /**
         * A route strategy allowing for explicit route reuse.
         * Used as a workaround for https://github.com/angular/angular/issues/18374
         * To reuse a given route, add `data: { reuse: true }` to the route definition.
         */
        var RouteReusableStrategy = /** @class */ (function(_super) {
          __extends(RouteReusableStrategy, _super);
          function RouteReusableStrategy() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          RouteReusableStrategy.prototype.shouldDetach = function(route) {
            return false;
          };
          RouteReusableStrategy.prototype.store = function(route, detachedTree) {};
          RouteReusableStrategy.prototype.shouldAttach = function(route) {
            return false;
          };
          RouteReusableStrategy.prototype.retrieve = function(route) {
            return null;
          };
          RouteReusableStrategy.prototype.shouldReuseRoute = function(future, curr) {
            return future.routeConfig === curr.routeConfig || future.data.reuse;
          };
          return RouteReusableStrategy;
        })(_angular_router__WEBPACK_IMPORTED_MODULE_0__['RouteReuseStrategy']);

        /***/
      },

    /***/ './src/app/home/home-routing.module.ts':
      /*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
      /*! exports provided: HomeRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HomeRoutingModule', function() {
          return HomeRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./home.component */ './src/app/home/home.component.ts'
        );
        /* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @app/shell/shell.service */ './src/app/shell/shell.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var routes = [
          _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__['Shell'].childRoutes([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            {
              path: 'home',
              component: _home_component__WEBPACK_IMPORTED_MODULE_3__['HomeComponent'],
              data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__['extract'])('Home') }
            }
          ])
        ];
        var HomeRoutingModule = /** @class */ (function() {
          function HomeRoutingModule() {}
          HomeRoutingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                providers: []
              })
            ],
            HomeRoutingModule
          );
          return HomeRoutingModule;
        })();

        /***/
      },

    /***/ './src/app/home/home.component.html':
      /*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="container-fluid">\n  <div class="container">\n    <div class="row">\n      <div class="table-responsive c">\n        <table class="table table-bordered">\n          <tbody>\n            <tr>\n              <td>\n                <form (ngSubmit)="crawlSite()">\n                  <input\n                    id="fname"\n                    name="fname"\n                    [(ngModel)]="url"\n                    required="required"\n                    type="text"\n                    placeholder="  Enter the Page URL"\n                    required\n                    pattern="https?://.+"\n                    style="width: 80%;\n          height: 37px;\n          "\n                  />\n\n                  <button type="submit" class="btn btn-primary btn-xs pull-right" style="width: 19%;">Crawl</button>\n                </form>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <div class="container">\n    <div class="">\n      <table class="table table-striped  custab">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Site Link</th>\n            <th>Crawl At</th>\n            <th>Furured Image</th>\n            <th class="text-center">Action</th>\n          </tr>\n        </thead>\n        <tr *ngFor="let item of data; let i = index">\n          <td class="text">{{ i + 1 }}</td>\n          <td class="text">\n            <a href="{{item.website_link}}"> {{ item.website_link }} </a>\n          </td>\n          <td class="text">{{ item.modified_on | date }}</td>\n          <td><img [src]="item.top_image" class="img" /></td>\n          <td class="text-center text"><button class="btn btn-info btn-xs" (click)="toggle(item)">View</button></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n<!-- Modal -->\n<div\n  id="myModal"\n  class="modal "\n  role="dialog"\n  style="display:none;\nbackground: rgba(119, 115, 115, 0.12156862745098039\n"\n>\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content -->\n    <div class="modal-content">\n      <div class="modal-header">\n        <h4 class="modal-title">Site Info</h4>\n        <button type="button" class="close" data-dismiss="modal" (click)="toggle()">&times;</button>\n      </div>\n      <div\n        class="modal-body"\n        style="    max-height: 500px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n  "\n      >\n        <div class="pad">\n          <h5>Link :</h5>\n          <a href="{{dataToModal.website_link}}"> {{ dataToModal.website_link }} </a>\n        </div>\n\n        <ng-container *ngIf="dataToModal.top_image">\n          <div class="pad">\n            <h5>Image :</h5>\n            <img [src]="dataToModal.top_image" class="img1" /> <br />\n          </div>\n        </ng-container>\n\n        <div class="pad">\n          <h5>Title:</h5>\n          {{ dataToModal.meta_title }}\n        </div>\n\n        <div class="pad">\n          <h5>Desc:</h5>\n          {{ dataToModal.meta_desc }}\n        </div>\n\n        <div class="pad">\n          <h5>Meta Keywords:</h5>\n          {{ dataToModal.meta_keywords }}\n        </div>\n\n        <div class="pad">\n          <h5>Content Keywords:</h5>\n          {{ dataToModal.content_keywords }}\n        </div>\n\n        <div class="pad">\n          <h5>Content Summary:</h5>\n          {{ dataToModal.content_summary }}\n        </div>\n\n        <div class="pad">\n          <h5>Content:</h5>\n          {{ dataToModal.content }}\n        </div>\n\n        <div class="pad">\n          <h5>Href Links:</h5>\n          <code> {{ dataToModal.links }} </code>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

        /***/
      },

    /***/ './src/app/home/home.component.scss':
      /*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '@charset "UTF-8";\n.logo {\n  width: 100px; }\nq {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: "« " " »"; }\n.custab {\n  border: 1px solid #ccc;\n  box-shadow: 3px 3px 2px #ccc;\n  transition: 0.5s; }\n.custab:hover {\n  box-shadow: 3px 3px 0px transparent;\n  transition: 0.5s; }\n.c {\n  width: 97%;\n  text-align: center;\n  margin: 0 auto 0 auto; }\n.text {\n  padding-top: 25px; }\n.img {\n  width: 120px;\n  height: 60px; }\n.img1 {\n  height: 100px;\n  width: 150px; }\n.pad {\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZ2hvc3QvRG93bmxvYWRzL2FuZy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCO0FBRUQ7RUFDRSx1QkFBc0I7RUFHdEIsNkJBQTRCO0VBQzVCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0Usb0NBQW1DO0VBQ25DLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjtBQUNEO0VBQ0UsYUFBWTtFQUNaLGFBQVksRUFDYjtBQUVEO0VBQ0UsY0FBYTtFQUNiLGFBQVksRUFDYjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4OyB9XG5cbnEge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBxdW90ZXM6IFwiwqsgXCIgXCIgwrtcIjsgfVxuXG4uY3VzdGFiIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogM3B4IDNweCAycHggI2NjYztcbiAgdHJhbnNpdGlvbjogMC41czsgfVxuXG4uY3VzdGFiOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwcHggdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7IH1cblxuLmMge1xuICB3aWR0aDogOTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bzsgfVxuXG4udGV4dCB7XG4gIHBhZGRpbmctdG9wOiAyNXB4OyB9XG5cbi5pbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNjBweDsgfVxuXG4uaW1nMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxNTBweDsgfVxuXG4ucGFkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDsgfVxuIiwiLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnEge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBxdW90ZXM6IFwiwqsgXCIgXCIgwrtcIjtcbn1cblxuLmN1c3RhYiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8vIHBhZGRpbmc6IDVweDtcbiAgLy8gbWFyZ2luOiA1JSAwO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAjY2NjO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmN1c3RhYjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMHB4IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYyB7XG4gIHdpZHRoOiA5NyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xufVxuLnRleHQge1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5pbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmltZzEge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5wYWQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuIl19 */';

        /***/
      },

    /***/ './src/app/home/home.component.ts':
      /*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
      /*! exports provided: HomeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HomeComponent', function() {
          return HomeComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var HomeComponent = /** @class */ (function() {
          function HomeComponent(httpClient) {
            this.httpClient = httpClient;
            this.data = [];
            this.dataToModal = {};
            this.modalElementId = 'myModal';
          }
          HomeComponent.prototype.ngOnInit = function() {
            this.loadData();
          };
          HomeComponent.prototype.loadData = function() {
            var _this = this;
            this.httpClient.get('api/v1/site_info/').subscribe(function(data) {
              _this.data = data.reverse();
            });
          };
          HomeComponent.prototype.crawlSite = function() {
            var _this = this;
            this.httpClient.get('api/v1/site_crawel/?url=' + this.url).subscribe(
              function(data) {
                _this.url = null;
                _this.loadData();
              },
              function(error) {
                alert(error.error.message);
              }
            );
          };
          HomeComponent.prototype.toggle = function(data) {
            if (data === void 0) {
              data = {};
            }
            this.dataToModal = data;
            if (document.getElementById(this.modalElementId).style.display === 'none') {
              document.getElementById(this.modalElementId).style.display = 'block';
            } else {
              document.getElementById(this.modalElementId).style.display = 'none';
            }
          };
          HomeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-home',
                template: __webpack_require__(/*! ./home.component.html */ './src/app/home/home.component.html'),
                styles: [__webpack_require__(/*! ./home.component.scss */ './src/app/home/home.component.scss')]
              }),
              __metadata('design:paramtypes', [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient']])
            ],
            HomeComponent
          );
          return HomeComponent;
        })();

        /***/
      },

    /***/ './src/app/home/home.module.ts':
      /*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
      /*! exports provided: HomeModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HomeModule', function() {
          return HomeModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        /* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @app/shared */ './src/app/shared/index.ts'
        );
        /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./home-routing.module */ './src/app/home/home-routing.module.ts'
        );
        /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./home.component */ './src/app/home/home.component.ts'
        );
        /* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./quote.service */ './src/app/home/quote.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var HomeModule = /** @class */ (function() {
          function HomeModule() {}
          HomeModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                  _app_core__WEBPACK_IMPORTED_MODULE_4__['CoreModule'],
                  _app_shared__WEBPACK_IMPORTED_MODULE_5__['SharedModule'],
                  _home_routing_module__WEBPACK_IMPORTED_MODULE_6__['HomeRoutingModule'],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule']
                ],
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_7__['HomeComponent']],
                providers: [_quote_service__WEBPACK_IMPORTED_MODULE_8__['QuoteService']]
              })
            ],
            HomeModule
          );
          return HomeModule;
        })();

        /***/
      },

    /***/ './src/app/home/quote.service.ts':
      /*!***************************************!*\
  !*** ./src/app/home/quote.service.ts ***!
  \***************************************/
      /*! exports provided: QuoteService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'QuoteService', function() {
          return QuoteService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var routes = {
          quote: function(c) {
            return '/jokes/random?category=' + c.category;
          }
        };
        var QuoteService = /** @class */ (function() {
          function QuoteService(httpClient) {
            this.httpClient = httpClient;
          }
          QuoteService.prototype.getRandomQuote = function(context) {
            return this.httpClient
              .cache()
              .get(routes.quote(context))
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(body) {
                  return body.value;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['catchError'])(function() {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['of'])('Error, could not load joke :-(');
                })
              );
          };
          QuoteService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient']])
            ],
            QuoteService
          );
          return QuoteService;
        })();

        /***/
      },

    /***/ './src/app/login/login-routing.module.ts':
      /*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
      /*! exports provided: LoginRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginRoutingModule', function() {
          return LoginRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./login.component */ './src/app/login/login.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var routes = [
          {
            path: 'login',
            component: _login_component__WEBPACK_IMPORTED_MODULE_3__['LoginComponent'],
            data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__['extract'])('Login') }
          }
        ];
        var LoginRoutingModule = /** @class */ (function() {
          function LoginRoutingModule() {}
          LoginRoutingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                providers: []
              })
            ],
            LoginRoutingModule
          );
          return LoginRoutingModule;
        })();

        /***/
      },

    /***/ './src/app/login/login.component.html':
      /*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="login-container bg-light">\n  <div class="login-box">\n    <h1 translate>APP_NAME</h1>\n    <div>\n      <!-- <h6 class="d-inline-block">v{{version}}</h6> -->\n      <!--\n        <div class="d-inline-block ml-3" ngbDropdown>\n          <button id="language-dropdown" class="btn btn-sm btn-secondary" ngbDropdownToggle>\n            {{currentLanguage}}\n          </button>\n          <div ngbDropdownMenu aria-labelledby="language-dropdown">\n            <button class="dropdown-item" *ngFor="let language of languages" (click)="setLanguage(language)">\n              {{language}}\n            </button>\n          </div>\n        </div>\n      -->\n    </div>\n    <div class="container">\n      <div class="card col-md-6 mt-3 mx-auto">\n        <div class="card-body">\n          <h4 class="card-title text-center"><i class="far fa-3x fa-user-circle text-muted"></i></h4>\n          <form (ngSubmit)="login()" [formGroup]="loginForm" novalidate>\n            <div class="alert alert-danger" [hidden]="!error || isLoading" translate>\n              Username or password incorrect.\n            </div>\n            <div class="form-group">\n              <label class="d-block">\n                <input\n                  type="text"\n                  class="form-control"\n                  formControlName="username"\n                  autocomplete="username"\n                  [placeholder]="\'Username\' | translate"\n                />\n                <span hidden translate>Username</span>\n                <small\n                  [hidden]="loginForm.controls.username.valid || loginForm.controls.username.untouched"\n                  class="text-danger"\n                  translate\n                >\n                  Username is required\n                </small>\n              </label>\n              <label class="d-block">\n                <input\n                  type="password"\n                  class="form-control"\n                  formControlName="password"\n                  autocomplete="current-password"\n                  [placeholder]="\'Password\' | translate"\n                  required\n                />\n                <span hidden translate>Password</span>\n                <small\n                  [hidden]="loginForm.controls.password.valid || loginForm.controls.password.untouched"\n                  class="text-danger"\n                  translate\n                >\n                  Password is required\n                </small>\n              </label>\n              <div class="form-check">\n                <label class="form-check-label">\n                  <input type="checkbox" class="form-check-input" formControlName="remember" />\n                  <span translate>Remember me</span>\n                </label>\n              </div>\n            </div>\n            <button class="btn btn-primary w-100" type="submit" [disabled]="loginForm.invalid || isLoading">\n              <i class="fas fa-cog fa-spin" [hidden]="!isLoading"></i> <span translate>Login</span>\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

        /***/
      },

    /***/ './src/app/login/login.component.scss':
      /*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/*\n * Application global variables.\n */\n.login-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.login-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%; }\n.ng-invalid.ng-touched:not(form) {\n  border-left: 4px solid #dc3545; }\n@media (max-width: 575.98px) {\n  .container {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dob3N0L0Rvd25sb2Fkcy9hbmcvc3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvZ2hvc3QvRG93bmxvYWRzL2FuZy9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZ2hvc3QvRG93bmxvYWRzL2FuZy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FDQ0g7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUSxFQUNUO0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsK0JEWVcsRUNYWjtBQ21ERztFRGhERjtJQUNFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwbGljYXRpb24gZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4vLyBTZXQgRm9udCBBd2Vzb21lIGZvbnQgcGF0aFxuJGZhLWZvbnQtcGF0aDogXCJ+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtd2ViZm9udHMvd2ViZm9udHNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXG4vL1xuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHZhcmlhYmxlcyBoZXJlIHRvIHN1aXRlIHlvdXIgdGhlbWUuXG4vLyBDb3B5IHZhcmlhYmxlcyB5b3Ugd2FudCB0byBjdXN0b21pemUgZnJvbSBub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogI2ZmZjtcbiRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTIwMDogI2U5ZWNlZjtcbiRncmF5LTMwMDogI2RlZTJlNjtcbiRncmF5LTQwMDogI2NlZDRkYTtcbiRncmF5LTUwMDogI2FkYjViZDtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTcwMDogIzQ5NTA1NztcbiRncmF5LTgwMDogIzM0M2E0MDtcbiRncmF5LTkwMDogIzIxMjUyOTtcbiRibGFjazogIzAwMDtcblxuJGJsdWU6ICMwMDczZGQ7XG4kaW5kaWdvOiAjNjYxMGYyO1xuJHB1cnBsZTogIzZmNDJjMTtcbiRwaW5rOiAjZTgzZThjO1xuJHJlZDogI2RjMzU0NTtcbiRvcmFuZ2U6ICNmZDdlMTQ7XG4keWVsbG93OiAjZmZjMTA3O1xuJGdyZWVuOiAjMjhhNzQ1O1xuJHRlYWw6ICMyMGM5OTc7XG4kY3lhbjogIzE3YTJiODtcblxuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkYmx1ZSxcbiAgc2Vjb25kYXJ5OiAkZ3JheS02MDAsXG4gIHN1Y2Nlc3M6ICRncmVlbixcbiAgaW5mbzogJGN5YW4sXG4gIHdhcm5pbmc6ICR5ZWxsb3csXG4gIGRhbmdlcjogJHJlZCxcbiAgbGlnaHQ6ICRncmF5LTEwMCxcbiAgZGFyazogJGdyYXktODAwXG4pO1xuXG4vLyBVc2UgQm9vdHN0cmFwIGRlZmF1bHRzIGZvciBvdGhlciB2YXJpYWJsZXMsIGltcG9ydGVkIGhlcmUgc28gd2UgY2FuIGFjY2VzcyBhbGwgYXBwIHZhcmlhYmxlcyBpbiBvbmUgcGxhY2Ugd2hlbiB1c2VkXG4vLyBpbiBjb21wb25lbnRzLlxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL192YXJpYWJsZXNcIjtcbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdGhlbWUtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHNcIjtcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9naW4tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdGhlbWUtY29sb3IoXCJkYW5nZXJcIik7XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMnB4LCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/login/login.component.ts':
      /*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
      /*! exports provided: LoginComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginComponent', function() {
          return LoginComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var log = new _app_core__WEBPACK_IMPORTED_MODULE_6__['Logger']('Login');
        var LoginComponent = /** @class */ (function() {
          function LoginComponent(router, route, formBuilder, i18nService, httpClient, authenticationService) {
            this.router = router;
            this.route = route;
            this.formBuilder = formBuilder;
            this.i18nService = i18nService;
            this.httpClient = httpClient;
            this.authenticationService = authenticationService;
            this.version = _env_environment__WEBPACK_IMPORTED_MODULE_5__['environment'].version;
            this.isLoading = false;
            this.createForm();
          }
          LoginComponent.prototype.ngOnInit = function() {};
          LoginComponent.prototype.login = function() {
            var _this = this;
            this.isLoading = true;
            this.httpClient.post('api-token-auth/', this.loginForm.value).subscribe(
              function(data) {
                var set = _this.loginForm.value;
                set.password = data.token;
                _this.authenticationService
                  .login(set)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['finalize'])(function() {
                      _this.loginForm.markAsPristine();
                      _this.isLoading = false;
                    })
                  )
                  .subscribe(
                    function(credentials) {
                      log.debug(credentials.username + ' successfully logged in');
                      _this.route.queryParams.subscribe(function(params) {
                        return _this.router.navigate([params.redirect || '/'], { replaceUrl: true });
                      });
                    },
                    function(error) {
                      log.debug('Login error: ' + error);
                      _this.error = error;
                    }
                  );
              },
              function(error) {
                log.debug('Login error: ' + error);
                _this.error = error;
                _this.isLoading = false;
              }
            );
          };
          LoginComponent.prototype.setLanguage = function(language) {
            this.i18nService.language = language;
          };
          Object.defineProperty(LoginComponent.prototype, 'currentLanguage', {
            get: function() {
              return this.i18nService.language;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(LoginComponent.prototype, 'languages', {
            get: function() {
              return this.i18nService.supportedLanguages;
            },
            enumerable: true,
            configurable: true
          });
          LoginComponent.prototype.createForm = function() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__['Validators'].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__['Validators'].required],
              remember: true
            });
          };
          LoginComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-login',
                template: __webpack_require__(/*! ./login.component.html */ './src/app/login/login.component.html'),
                styles: [__webpack_require__(/*! ./login.component.scss */ './src/app/login/login.component.scss')]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormBuilder'],
                _app_core__WEBPACK_IMPORTED_MODULE_6__['I18nService'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__['HttpClient'],
                _app_core__WEBPACK_IMPORTED_MODULE_6__['AuthenticationService']
              ])
            ],
            LoginComponent
          );
          return LoginComponent;
        })();

        /***/
      },

    /***/ './src/app/login/login.module.ts':
      /*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
      /*! exports provided: LoginModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoginModule', function() {
          return LoginModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ './node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js'
        );
        /* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./login-routing.module */ './src/app/login/login-routing.module.ts'
        );
        /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./login.component */ './src/app/login/login.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var LoginModule = /** @class */ (function() {
          function LoginModule() {}
          LoginModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__['TranslateModule'],
                  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModule'],
                  _login_routing_module__WEBPACK_IMPORTED_MODULE_5__['LoginRoutingModule']
                ],
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__['LoginComponent']]
              })
            ],
            LoginModule
          );
          return LoginModule;
        })();

        /***/
      },

    /***/ './src/app/shared/index.ts':
      /*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
      /*! exports provided: SharedModule, LoaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./shared.module */ './src/app/shared/shared.module.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'SharedModule', function() {
          return _shared_module__WEBPACK_IMPORTED_MODULE_0__['SharedModule'];
        });

        /* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./loader/loader.component */ './src/app/shared/loader/loader.component.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'LoaderComponent', function() {
          return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__['LoaderComponent'];
        });

        /***/
      },

    /***/ './src/app/shared/loader/loader.component.html':
      /*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div [hidden]="!isLoading" class="text-xs-center">\n  <i class="fas fa-cog fa-spin fa-3x"></i> <span>{{ message }}</span>\n</div>\n';

        /***/
      },

    /***/ './src/app/shared/loader/loader.component.scss':
      /*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.fa {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dob3N0L0Rvd25sb2Fkcy9hbmcvc3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */';

        /***/
      },

    /***/ './src/app/shared/loader/loader.component.ts':
      /*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
      /*! exports provided: LoaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoaderComponent', function() {
          return LoaderComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var LoaderComponent = /** @class */ (function() {
          function LoaderComponent() {
            this.isLoading = false;
          }
          LoaderComponent.prototype.ngOnInit = function() {};
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            LoaderComponent.prototype,
            'isLoading',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', String)],
            LoaderComponent.prototype,
            'message',
            void 0
          );
          LoaderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-loader',
                template: __webpack_require__(
                  /*! ./loader.component.html */ './src/app/shared/loader/loader.component.html'
                ),
                styles: [
                  __webpack_require__(/*! ./loader.component.scss */ './src/app/shared/loader/loader.component.scss')
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            LoaderComponent
          );
          return LoaderComponent;
        })();

        /***/
      },

    /***/ './src/app/shared/shared.module.ts':
      /*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
      /*! exports provided: SharedModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SharedModule', function() {
          return SharedModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./loader/loader.component */ './src/app/shared/loader/loader.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var SharedModule = /** @class */ (function() {
          function SharedModule() {}
          SharedModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__['LoaderComponent']],
                exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__['LoaderComponent']]
              })
            ],
            SharedModule
          );
          return SharedModule;
        })();

        /***/
      },

    /***/ './src/app/shell/header/header.component.html':
      /*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.html ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<header>\n  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">\n    <a class="navbar-brand" routerLink="/home" translate>APP_NAME</a>\n    <button\n      class="navbar-toggler"\n      type="button"\n      aria-controls="navbar-menu"\n      aria-label="Toggle navigation"\n      (click)="toggleMenu()"\n      [attr.aria-expanded]="!menuHidden"\n    >\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div id="navbar-menu" class="collapse navbar-collapse float-xs-none" [ngbCollapse]="menuHidden">\n      <div class="navbar-nav">\n        <a class="nav-item nav-link text-uppercase" routerLink="/home" routerLinkActive="active">\n          <i class="fas fa-home"></i>\n          <!-- <span translate>Home</span> -->\n        </a>\n        <!--\n          <a class="nav-item nav-link text-uppercase" routerLink="/about" routerLinkActive="active">\n            <i class="fas fa-question-circle"></i>\n            <span translate>About</span>\n          </a>\n        -->\n      </div>\n      <div class="navbar-nav ml-auto">\n        <!--\n          <div class="nav-item" ngbDropdown placement="bottom-right">\n            <a id="language-dropdown" class="nav-link" ngbDropdownToggle>{{currentLanguage}}</a>\n            <div ngbDropdownMenu aria-labelledby="language-dropdown">\n              <button class="dropdown-item" *ngFor="let language of languages" (click)="setLanguage(language)">\n                {{language}}\n              </button>\n            </div>\n          </div>\n        -->\n        <div class="nav-item" ngbDropdown placement="bottom-right">\n          <a id="user-dropdown" class="nav-link" ngbDropdownToggle> <i class="fas fa-user-circle"></i> </a>\n          <div ngbDropdownMenu aria-labelledby="user-dropdown">\n            <h6 class="dropdown-header">\n              <span translate>Logged in as</span> <b>{{ username }}</b>\n            </h6>\n            <div class="dropdown-divider"></div>\n            <button class="dropdown-item" (click)="logout()" translate>Logout</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>\n';

        /***/
      },

    /***/ './src/app/shell/header/header.component.scss':
      /*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.scss ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '/*\n * Application global variables.\n */\n.navbar {\n  margin-bottom: 1rem; }\n.nav-link.dropdown-toggle {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dob3N0L0Rvd25sb2Fkcy9hbmcvc3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvZ2hvc3QvRG93bmxvYWRzL2FuZy9zcmMvYXBwL3NoZWxsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9naG9zdC9Eb3dubG9hZHMvYW5nL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUNBSDtFQUNFLG9CQzRIVyxFRDNIWjtBQUVEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcGxpY2F0aW9uIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuLy8gU2V0IEZvbnQgQXdlc29tZSBmb250IHBhdGhcbiRmYS1mb250LXBhdGg6IFwifkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXdlYmZvbnRzL3dlYmZvbnRzXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQm9vdHN0cmFwIHZhcmlhYmxlc1xuLy9cbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCB2YXJpYWJsZXMgaGVyZSB0byBzdWl0ZSB5b3VyIHRoZW1lLlxuLy8gQ29weSB2YXJpYWJsZXMgeW91IHdhbnQgdG8gY3VzdG9taXplIGZyb20gbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4kd2hpdGU6ICNmZmY7XG4kZ3JheS0xMDA6ICNmOGY5ZmE7XG4kZ3JheS0yMDA6ICNlOWVjZWY7XG4kZ3JheS0zMDA6ICNkZWUyZTY7XG4kZ3JheS00MDA6ICNjZWQ0ZGE7XG4kZ3JheS01MDA6ICNhZGI1YmQ7XG4kZ3JheS02MDA6ICM4NjhlOTY7XG4kZ3JheS03MDA6ICM0OTUwNTc7XG4kZ3JheS04MDA6ICMzNDNhNDA7XG4kZ3JheS05MDA6ICMyMTI1Mjk7XG4kYmxhY2s6ICMwMDA7XG5cbiRibHVlOiAjMDA3M2RkO1xuJGluZGlnbzogIzY2MTBmMjtcbiRwdXJwbGU6ICM2ZjQyYzE7XG4kcGluazogI2U4M2U4YztcbiRyZWQ6ICNkYzM1NDU7XG4kb3JhbmdlOiAjZmQ3ZTE0O1xuJHllbGxvdzogI2ZmYzEwNztcbiRncmVlbjogIzI4YTc0NTtcbiR0ZWFsOiAjMjBjOTk3O1xuJGN5YW46ICMxN2EyYjg7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGJsdWUsXG4gIHNlY29uZGFyeTogJGdyYXktNjAwLFxuICBzdWNjZXNzOiAkZ3JlZW4sXG4gIGluZm86ICRjeWFuLFxuICB3YXJuaW5nOiAkeWVsbG93LFxuICBkYW5nZXI6ICRyZWQsXG4gIGxpZ2h0OiAkZ3JheS0xMDAsXG4gIGRhcms6ICRncmF5LTgwMFxuKTtcblxuLy8gVXNlIEJvb3RzdHJhcCBkZWZhdWx0cyBmb3Igb3RoZXIgdmFyaWFibGVzLCBpbXBvcnRlZCBoZXJlIHNvIHdlIGNhbiBhY2Nlc3MgYWxsIGFwcCB2YXJpYWJsZXMgaW4gb25lIHBsYWNlIHdoZW4gdXNlZFxuLy8gaW4gY29tcG9uZW50cy5cbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbn1cblxuLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cyk7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIC44NzUpICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgKCRzcGFjZXIgLyAyKSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgODAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCRncmF5LTkwMCwgNy41JSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqICRpbnB1dC1idG4tbGluZS1oZWlnaHQpICsgKCRpbnB1dC1idG4tcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1oZWlnaHQtaW5uZXJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyLXNtOiAgICAgICAgICAgICAgICAgKCRmb250LXNpemUtc20gKiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtKSArICgkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtaGVpZ2h0LWlubmVyLXNtfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lci1sZzogICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWxnICogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZykgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWhlaWdodC1pbm5lci1sZ30gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM0UlM0NwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICBub25lICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoIHJnYmEoJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yLCAuNSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgIDc1JSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgIDEyNSUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICgkc3BhY2VyIC8gMikgIWRlZmF1bHQ7XG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAoJHNwYWNlciAvIDIpICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuXG4vLyBKdW1ib3Ryb25cblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjc1KSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgLjUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuNnMgZWFzZSAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iXX0= */';

        /***/
      },

    /***/ './src/app/shell/header/header.component.ts':
      /*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
      /*! exports provided: HeaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HeaderComponent', function() {
          return HeaderComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var HeaderComponent = /** @class */ (function() {
          function HeaderComponent(router, authenticationService, i18nService) {
            this.router = router;
            this.authenticationService = authenticationService;
            this.i18nService = i18nService;
            this.menuHidden = true;
          }
          HeaderComponent.prototype.ngOnInit = function() {};
          HeaderComponent.prototype.toggleMenu = function() {
            this.menuHidden = !this.menuHidden;
          };
          HeaderComponent.prototype.setLanguage = function(language) {
            this.i18nService.language = language;
          };
          HeaderComponent.prototype.logout = function() {
            var _this = this;
            this.authenticationService.logout().subscribe(function() {
              return _this.router.navigate(['/login'], { replaceUrl: true });
            });
          };
          Object.defineProperty(HeaderComponent.prototype, 'currentLanguage', {
            get: function() {
              return this.i18nService.language;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(HeaderComponent.prototype, 'languages', {
            get: function() {
              return this.i18nService.supportedLanguages;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(HeaderComponent.prototype, 'username', {
            get: function() {
              var credentials = this.authenticationService.credentials;
              return credentials ? credentials.username : null;
            },
            enumerable: true,
            configurable: true
          });
          HeaderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-header',
                template: __webpack_require__(
                  /*! ./header.component.html */ './src/app/shell/header/header.component.html'
                ),
                styles: [
                  __webpack_require__(/*! ./header.component.scss */ './src/app/shell/header/header.component.scss')
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['Router'],
                _app_core__WEBPACK_IMPORTED_MODULE_2__['AuthenticationService'],
                _app_core__WEBPACK_IMPORTED_MODULE_2__['I18nService']
              ])
            ],
            HeaderComponent
          );
          return HeaderComponent;
        })();

        /***/
      },

    /***/ './src/app/shell/shell.component.html':
      /*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = '<app-header></app-header>\n<router-outlet></router-outlet>\n';

        /***/
      },

    /***/ './src/app/shell/shell.component.scss':
      /*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */';

        /***/
      },

    /***/ './src/app/shell/shell.component.ts':
      /*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
      /*! exports provided: ShellComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ShellComponent', function() {
          return ShellComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var ShellComponent = /** @class */ (function() {
          function ShellComponent() {}
          ShellComponent.prototype.ngOnInit = function() {};
          ShellComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-shell',
                template: __webpack_require__(/*! ./shell.component.html */ './src/app/shell/shell.component.html'),
                styles: [__webpack_require__(/*! ./shell.component.scss */ './src/app/shell/shell.component.scss')]
              }),
              __metadata('design:paramtypes', [])
            ],
            ShellComponent
          );
          return ShellComponent;
        })();

        /***/
      },

    /***/ './src/app/shell/shell.module.ts':
      /*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
      /*! exports provided: ShellModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ShellModule', function() {
          return ShellModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/fesm5/common.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ './node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js'
        );
        /* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./shell.component */ './src/app/shell/shell.component.ts'
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./header/header.component */ './src/app/shell/header/header.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var ShellModule = /** @class */ (function() {
          function ShellModule() {}
          ShellModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                  _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                  _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModule'],
                  _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule']
                ],
                declarations: [
                  _header_header_component__WEBPACK_IMPORTED_MODULE_6__['HeaderComponent'],
                  _shell_component__WEBPACK_IMPORTED_MODULE_5__['ShellComponent']
                ]
              })
            ],
            ShellModule
          );
          return ShellModule;
        })();

        /***/
      },

    /***/ './src/app/shell/shell.service.ts':
      /*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
      /*! exports provided: Shell */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Shell', function() {
          return Shell;
        });
        /* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @app/core */ './src/app/core/index.ts'
        );
        /* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./shell.component */ './src/app/shell/shell.component.ts'
        );

        /**
         * Provides helper methods to create routes.
         */
        var Shell = /** @class */ (function() {
          function Shell() {}
          /**
           * Creates routes using the shell component and authentication.
           * @param routes The routes to add.
           * @return The new route using shell as the base.
           */
          Shell.childRoutes = function(routes) {
            return {
              path: '',
              component: _shell_component__WEBPACK_IMPORTED_MODULE_1__['ShellComponent'],
              children: routes,
              canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_0__['AuthenticationGuard']],
              // Reuse ShellComponent instance when navigating between child views
              data: { reuse: true }
            };
          };
          return Shell;
        })();

        /***/
      },

    /***/ './src/environments/.env.ts':
      /*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] = {
          npm_package_version: '1.0.0'
        };

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        });
        /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./.env */ './src/environments/.env.ts'
        );
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        // `.env.ts` is generated by the `npm run env` command

        var environment = {
          production: false,
          version: _env__WEBPACK_IMPORTED_MODULE_0__['default'].npm_package_version + '-dev',
          serverUrl: 'http://13.233.24.106:8000/',
          defaultLanguage: 'en-US',
          supportedLanguages: ['en-US', 'fr-FR']
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */ './node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @env/environment */ './src/environments/environment.ts'
        );
        /*
         * Entry point of the application.
         * Only platform bootstrapping code should be here.
         * For app-specific initialization, use `app/app.component.ts`.
         */

        if (_env_environment__WEBPACK_IMPORTED_MODULE_3__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__['platformBrowserDynamic'])()
          .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
          .catch(function(err) {
            return console.log(err);
          });

        /***/
      },

    /***/ './src/translations/en-US.json':
      /*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
      /*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
      /***/ function(module) {
        module.exports = {
          APP_NAME: 'MyScrapper',
          About: 'About',
          'Hello world !': 'Hello world !',
          Home: 'Home',
          'Logged in as': 'Logged in as',
          Login: 'Login',
          Logout: 'Logout',
          Password: 'Password',
          'Password is required': 'Password is required',
          Username: 'Username',
          'Username is required': 'Username is required',
          'Username or password incorrect.': 'Username or password incorrect.',
          'Remember me': 'Remember me',
          Version: 'Version'
        };

        /***/
      },

    /***/ './src/translations/fr-FR.json':
      /*!*************************************!*\
  !*** ./src/translations/fr-FR.json ***!
  \*************************************/
      /*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
      /***/ function(module) {
        module.exports = {
          APP_NAME: 'MyScrapper',
          About: 'A propos',
          'Hello world !': 'Bonjour le monde !',
          Home: 'Accueil',
          'Logged in as': 'Connecté en tant que',
          Login: 'Connexion',
          Logout: 'Déconnexion',
          Password: 'Mot de passe',
          'Password is required': 'Mot de passe requis',
          Username: 'Identifiant',
          'Username is required': 'Identifiant requis',
          'Username or password incorrect.': 'Identifiant ou mot de passe incorrect.',
          'Remember me': 'Rester connecté',
          Version: 'Version'
        };

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(/*! /home/ghost/Downloads/ang/src/main.ts */ './src/main.ts');

        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main.js.map
