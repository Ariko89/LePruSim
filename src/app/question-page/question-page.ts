import { Component, computed, signal } from '@angular/core';
import { Question } from '../data/question';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Questions } from '../service/questions';

@Component({
  selector: 'app-question-page',
  standalone: true,
  templateUrl: './question-page.html',
})
export class QuestionPageComponent {
  questions = signal<Question[]>([]);
  currentIndex = signal(0);
  currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  examId = '';
  topicId = '';

  constructor(
    private route: ActivatedRoute,
    public questionService: Questions,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.examId = params.get('examId') ?? '';

      this.topicId = params.get('topicId') ?? '';
      console.log(this.examId);
      console.log(this.topicId);

      this.questionService.getQuestions(this.examId, this.topicId).subscribe({
        next: (questions) => {
          this.questions.set(questions);
        },
        error: (err) => {
          console.error('Fragen können nicht geladen werden:', err);
        },
      });
    });
  }
  
  next() {
      if (this.currentIndex() < this.questions().length - 1) {
        this.currentIndex.set(this.currentIndex() + 1);
    }
    else {
      console.log('Ende der Fragenliste erreicht.');
    }
  }
}
