import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroService } from './registro/registro.service';
import { FormComponent } from './registro/form.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';

const routes: Routes = [
  {path: '', redirectTo: '/registro', pathMatch: 'full'},
  {path: 'registro', component: RegistroComponent},
  {path: 'form', component: FormComponent},
  {path: 'asignatura', component: AsignaturaComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    FormComponent,
    AsignaturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
