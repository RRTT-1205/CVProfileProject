import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgFondoHeaderComponent } from './components/img-fondo-header/img-fondo-header.component';
import { PhotoComponent } from './components/photo/photo.component';
import { Profile0Component } from './components/profile0/profile0.component';
import { Profile1Component } from './components/profile1/profile1.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducCertfComponent } from './components/educ-certf/educ-certf.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImgFondoHeaderComponent,
    PhotoComponent,
    Profile0Component,
    Profile1Component,
    ExperienciaComponent,
    EducCertfComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
