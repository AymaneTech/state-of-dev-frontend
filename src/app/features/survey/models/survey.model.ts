import {Owner} from './owner.model';
import {SurveyEdition} from '../../survey-edition/survey-edition.model';

export interface Survey {
  id: string;
  title: string;
  description: string;
  owner: Owner;
  surveyEditions: SurveyEdition[];
}

export interface SurveyRequest {
  title: String;
  description: string;
  ownerId: string;
}
