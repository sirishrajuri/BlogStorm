import { Component } from '@angular/core';

interface ArticleSettings {
  audience: string;
  category: string;
  language: string;
  author: string;
  imageType: string;
  postStatus: string;
  writingStyle: string;
}

@Component({
  selector: 'app-choose-article-settings',
  templateUrl: './choose-article-settings.component.html',
  styleUrls: ['./choose-article-settings.component.scss']
})
export class ChooseArticleSettingsComponent {
  settings: ArticleSettings = {
    audience: '',
    category: '',
    language: '',
    author: '',
    imageType: '',
    postStatus: '',
    writingStyle: ''
  };

  audienceOptions = ['General public', 'Specific audience'];
  categoryOptions = ['Category 1', 'Category 2'];
  languageOptions = ['American English', 'British English'];
  authorOptions = ['own', 'guest author'];
  imageTypeOptions = ['Stock', 'Custom'];
  postStatusOptions = ['Draft', 'Publish'];
  writingStyleOptions = ['Journalistic', 'Conversational', 'Technical'];

  constructor() { }

  addCustomWritingStyle(): void {
    // Logic to add a custom writing style
  }

  submitSettings(): void {
    // Logic to submit the settings
  }
}
