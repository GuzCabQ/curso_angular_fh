import { Component } from "@angular/core";


@Component({
    selector: 'app-hero-list',
    templateUrl:'./list.component.html',
    styleUrls: ['./list.component.css']
})
export class HeroListComponent{
public heroNames:string[]=['Spiderman','Thor','Hulk','Ironman','Capitan America'];
public deleteHero:string | undefined;

deleteLastHero():void{
this.deleteHero=this.heroNames.pop();
}
}