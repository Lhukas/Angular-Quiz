import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

    allCategories: any[] = [];
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

    filterCategories(searchTerm: string): void {
        if (!searchTerm) {
            this.quizCategorie = this.allCategories;
        } else {
            this.quizCategorie = this.allCategories.filter(categorie =>
                categorie.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    }


    resetFilter(): void {
        this.quizCategorie = this.allCategories;
    }

    resetQuiz() {
        this.quizCategorie = [];

    }

}
