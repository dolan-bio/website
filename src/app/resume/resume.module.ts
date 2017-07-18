import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EducationsService } from './educations.service';
import { ExperiencesService } from './experiences.service';
import { LoadingComponent } from './loading/loading.component';
import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ResumeComponent,
        LoadingComponent,
    ],
    providers: [
        EducationsService,
        ExperiencesService,
    ],
    exports: [
        ResumeComponent,
    ],
})
export class ResumeModule { }
