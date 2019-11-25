import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainComponent } from './components/shared/main/main.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, MainComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
