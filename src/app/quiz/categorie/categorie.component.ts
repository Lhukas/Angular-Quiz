import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../shared/services/quiz.service";
import {CategorieService} from "../../shared/services/categorie.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  constructor(private categorieService : CategorieService) { }

  quizCategorie: any[] = this.categorieService.quizCategorie;

  ngOnInit(): void {
    this.categorieService.getCategorie();
    console.log(this.quizCategorie)
  }


  goQuizCategorie(id : number) : void{
console.log(id)
  }

}
