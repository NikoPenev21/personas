import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SfButtonModule, SfChoicesModule } from '@progress/sitefinity-component-framework'


import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PersonaComponent } from './persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SidebarComponent,
    MainContainerComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    SfButtonModule,
    SfChoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
