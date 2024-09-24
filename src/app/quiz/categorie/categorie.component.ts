import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../shared/services/quiz.service";
import {CategorieService} from "../../shared/services/categorie.service";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit{

  constructor(private categorieService : CategorieService,
              private router: Router,
              private quizService : QuizService) { }

  quizCategorie: any[] = this.categorieService.quizCategorie;

  ngOnInit(): void {
    this.categorieService.resetQuiz()
    this.categorieService.getCategorie();
    this.quizService.resetQuiz()
  }


  goQuizCategorie(id : number) : void{
    this.router.navigate(['/quiz', id]);
  }

}
