import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from '../score';

@Injectable({
  providedIn: 'root',
})
export class ScoreserviceService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  getScores() {
    return this.http.get<Score[]>('https://localhost:7246/api/Score', {
      withCredentials: true,
    });
  }
  postScore(scoreList: Score) {
    return this.http.post('https://localhost:7246/api/Score', scoreList, {
      withCredentials: true,
    });
  }
  putScore(scoreList: Score) {
    return this.http.put(
      'https://localhost:7246/api/Score/update',
      scoreList,
      { withCredentials: true }
    );
  }
  deleteScore(ScoreId: number) {
    return this.http.delete('https://localhost:7246/api/Score/' + ScoreId, {
      withCredentials: true,
    });
  }
}
