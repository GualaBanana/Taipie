import { Injectable } from '@angular/core';

/** Storage access abstraction. */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  storage: Storage = localStorage;

  constructor() {
    if (!this.storage.length) {
      this.setDefaultConfig();
    }
  }

  setDefaultConfig(): void {
    let defaultConfig = {
      language: this.detectLanguage(),
      textSource: 'randomWords',
      wordCount: '25',
      punctuation: 'false',
    }
    for (const [key, value] of Object.entries(defaultConfig)) {
      this.storage.setItem(key, value);
    }
  }

  private detectLanguage(): string {
    return 'en';
  }
  
  public get textSource(): string {
    return this.storage.getItem('textSource')!;
  }

  public set textSource(value: string) {
    this.storage.setItem('textSource', value);
  }

  public get wordCount(): number {
    return Number(this.storage.getItem('wordCount'));
  }

  public set wordCount(value: number) {
    this.storage.setItem('wordCount', value.toString());
  }

  public get language(): string {
    return this.storage.getItem('language')!;
  }

  public get wordLength(): number {
    return Number(this.storage.getItem('wordLength'));
  }

  public set wordLength(value: number) {
    if (!value) this.storage.removeItem('wordLength');
    this.storage.setItem('wordLength', value.toString());
  }
  
  public get punctuation() : boolean {
    return this.storage.getItem('punctuation') === 'true';
  }

  public set punctuation(value: boolean) {
    this.storage.setItem('punctuation', value.toString());
  }

}
