import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandeauEquipeComponent } from './components/bandeau-equipe/bandeau-equipe.component';
import { ParametrageComponent } from './components/parametrage/parametrage.component';
import { DetailMobileComponent } from './components/detail-mobile/detail-mobile.component';
import { RepresentationMobilesComponent } from './components/representation-mobiles/representation-mobiles.component';
import { DiagrammeDensiteComponent } from './components/diagramme-densite/diagramme-densite.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { RegieVideoComponent } from './components/regie-video/regie-video.component';
import { WebSocketComponent } from './components/web-socket/web-socket.component';
import { ParametrageFormulaireComponent } from './components/parametrage-formulaire/parametrage-formulaire.component';
import { DetailMobileFormulaireComponent } from './components/detail-mobile-formulaire/detail-mobile-formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauEquipeComponent,
    ParametrageComponent,
    DetailMobileComponent,
    RepresentationMobilesComponent,
    DiagrammeDensiteComponent,
    TableauComponent,
    RegieVideoComponent,
    WebSocketComponent,
    ParametrageFormulaireComponent,
    DetailMobileFormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
