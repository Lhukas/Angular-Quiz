import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  quizCategorie: any[] = [];

  constructor(private http: HttpClient) { }

  getCategorie() {
        this.http.get(`http://localhost:3000/categories`).subscribe((categorie: any) => {
          this.quizCategorie.push({
            id: categorie.id,
            name: categorie.categoryName,
          });
        });

    console.log(this.quizCategorie)
    }

}
