import { Injectable } from '@angular/core';
import { RandomWordsService } from './random-words.service';
import { ConfigService } from '../config.service';
import { TextSource } from './text-source';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSourceService {

  constructor(
    private config: ConfigService,
    private randomWords: RandomWordsService,
    ) { }

  getText(): Observable<string[]> {
    return this.textSource.generateText();
  }

  private get textSource(): TextSource {
    switch (this.config.textSource) {
      case 'randomWords':
        return this.randomWords;
      default:
        throw new Error("Unknown text source.");
    }
  }

}
