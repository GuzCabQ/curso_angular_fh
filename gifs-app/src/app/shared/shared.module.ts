import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SidebarComponent,
        LazyImageComponent
    ],
    declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
})
export class SharedModule { }
