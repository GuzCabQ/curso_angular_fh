import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { HeroListComponent } from './components/list/list.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        HeroComponent,
        HeroListComponent
    ],
    exports: [
        HeroComponent,
        HeroListComponent
      ],
      imports:[
        CommonModule
      ]
})
export class HeroesModule{

}