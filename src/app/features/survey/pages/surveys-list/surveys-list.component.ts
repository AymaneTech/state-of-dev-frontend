import { Component, inject, OnInit } from '@angular/core';
import { Survey } from '../../models/survey.model';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-surveys-list',
  imports: [],
  standalone: true,
  templateUrl: './surveys-list.component.html'
})
export class SurveysListComponent implements OnInit {
  surveys!: Survey[];

  constructor(private readonly surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getAll().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(this.surveys);
      }
    })
  }
}
