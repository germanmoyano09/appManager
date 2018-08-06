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

const appRouter: Routes = [
  { path: 'asado-manager', component: AsadoManagerComponent },
  { path: 'gastos-viajes', component: GastosViajesComponent },
  { path: 'control-gastos', component: ControlGastosComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AsadoManagerComponent,
    GastosViajesComponent,
    ControlGastosComponent,
    LoginComponent
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
