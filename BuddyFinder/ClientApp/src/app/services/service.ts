import { Observable } from 'rxjs';

export interface Service<TInput, TOutput> {
    execute(input: TInput): Observable<TOutput>;
}
