import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page.component';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HomePageComponent
    ],
    declarations: [
        CardComponent,
        CardListComponent,
        HomePageComponent,
        SearchBoxComponent,

    ],
})
export class GifsModule { }
