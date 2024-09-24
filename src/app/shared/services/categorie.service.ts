import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  quizCategorie: any[] = [];

  constructor(private http: HttpClient) { }

  getCategorie() {

        this.http.get(`http://localhost:3000/categories`).subscribe((categories: any) => {
            for (const categorie of categories) {
                this.quizCategorie.push({
                    id: categorie.categoryId,
                    name: categorie.categoryName,
                });
            }

        });
    }

    resetQuiz() {
        this.quizCategorie = [];
    }

}
