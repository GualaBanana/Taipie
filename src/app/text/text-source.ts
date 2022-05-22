import { Observable } from "rxjs";

export interface TextSource {
    generateText(): Observable<string[]>;
}
