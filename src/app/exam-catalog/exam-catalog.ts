import { Component } from '@angular/core';
import { Catalog } from '../service/catalog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam-catalog',
  imports: [RouterLink],
  templateUrl: './exam-catalog.html',
  styleUrl: './exam-catalog.css',
})
export class ExamCatalog {
  constructor(public catalogService: Catalog) {}
}
