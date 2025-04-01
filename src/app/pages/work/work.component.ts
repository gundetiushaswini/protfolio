import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  
  
  projects = [
    {
      id:1,
      title: 'EduVibe Quiz App',
      description: 'A Django-based quiz app with AI chatbot.',
      github_repo: 'https://github.com/gundetiushaswini/qz/tree/main/quiz_project',
      pythonanywhere:'https://ushaswini.pythonanywhere.com'
    },
    {
      id:2,
      title: 'Portfolio Analyzer',
      description: 'An Angular tool to assess investment portfolios.',
      github_repo: 'https://github.com/gundetiushaswini/portfolio-analyzer',
      netlify: 'https://portfolioanalyzer.netlify.app/'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
