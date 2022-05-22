import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConfigService } from '../config.service';
import { PunctuationService } from './punctuation.service';
import { TextSource } from './text-source';

@Injectable({
  providedIn: 'root'
})
export class RandomWordsService implements TextSource {

  private api = 'https://random-word-api.herokuapp.com';

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private punctuation: PunctuationService) { }

  generateText(): Observable<string[]> {
      const endpoint = `${this.api}/word`;
      const queryString = this.constructQueryString();
      const applyModifiers = this.modifiersApplier;
      return this.http.get<string[]>(`${endpoint}${queryString}`)
        .pipe(map(applyModifiers));
    }

    get modifiersApplier() {
      const punctuation = this.punctuation;
      const punctuationShouldBeAdded = this.config.punctuation;

      return function(words: string[], index: number): string[] {
        if (punctuationShouldBeAdded) punctuation.addTo(words);
        return words;
      }
    }

    private constructQueryString(): string {
      const queryStringParameters = {
        number: this.config.wordCount,
        lang: this.config.language,
        length: this.config.wordLength,
      }
      let queryString = '';
      for (const [key, value] of Object.entries(queryStringParameters)) {
        if (!value) continue;

        queryString += `${key}=${value}&`;
      }
      if (queryString) queryString = '?' + queryString;
      return queryString;
    }

}
