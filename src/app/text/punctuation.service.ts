import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunctuationService {

  PUNCTUATION_MARKS = ['.', '!', '?', ',', ';', ':', ' -', "''", '""', '()', '[]', '{}']

  private words!: string[];

  constructor() { }

  addTo(words: string[]): void {
    this.words = words;
    this.capitalizeFirstWord();
    for (let at = 0; at < this.words.length - 1; at++) {
      if (Math.random() <= .1) {
        this.addPunctuationMark(this.randomPunctuationMark, at);
      }
    }
    this.addPunctuationMark('.', this.words.length - 1)
  }

  private capitalizeFirstWord(): void {
    this.words[0] = this.capitalize(this.words[0]);
  }

  private addPunctuationMark(mark: string, at: number): void {
    this.words[at] = this.isPaired(mark) ? mark[0] + this.words[at] + mark[1] : this.words[at] + mark;
    if (this.isTerminator(mark) && at !== this.words.length - 1) {
      this.words[at + 1] = this.capitalize(this.words[at + 1]);
    }
  }

  private capitalize(word: string): string {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1);
  }

  private isPaired(punctuationMark: string): boolean {
    return punctuationMark.trim().length === 2;
  }

  private isTerminator(punctuationMark: string): boolean {
    return ['.', '!', '?'].includes(punctuationMark);
  }

  get randomPunctuationMark(): string {
    return this.PUNCTUATION_MARKS[Math.floor(Math.random() * this.PUNCTUATION_MARKS.length)];
  }

}
