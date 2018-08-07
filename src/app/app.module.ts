import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { AsadoManagerComponent } from './asado-manager/asado-manager.component';
import { GastosViajesComponent } from './gastos-viajes/gastos-viajes.component';
import { ControlGastosComponent } from './control-gastos/control-gastos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { CreateAsadoComponent } from './asado-manager/create-asado/create-asado.component';

const appRouter: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'asado-manager', component: AsadoManagerComponent, canActivate: [ AuthGuard ]},
  { path: 'asado-manager/create-asado', component: CreateAsadoComponent, canActivate: [ AuthGuard ]},
  { path: 'asado-manager', component: AsadoManagerComponent, canActivate: [ AuthGuard ]},
  { path: 'asado-manager', component: AsadoManagerComponent, canActivate: [ AuthGuard ]},
  { path: 'gastos-viajes', component: GastosViajesComponent, canActivate: [ AuthGuard ] },
  { path: 'control-gastos', component: ControlGastosComponent, canActivate: [ AuthGuard ]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AsadoManagerComponent,
    GastosViajesComponent,
    ControlGastosComponent,
    LoginComponent,
    RegisterComponent,
    CreateAsadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
