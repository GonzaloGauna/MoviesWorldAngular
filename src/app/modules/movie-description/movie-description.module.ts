import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDescriptionComponent } from './movie-description.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
  declarations: [MovieDescriptionComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [MovieDescriptionComponent]
})
export class MovieDescriptionModule { }
