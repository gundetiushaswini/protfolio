import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsdataService {
  projects_data = [
    {
      id: 1,
      title: "EduVibe Quiz Web Application",
      description: "EduVibe is a Django-powered quiz platform...",
      technologies: [
        "Frontend",
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Python",
        "SQLite",
        "Django Auth",
        "PythonAnywhere",
      ],
     
      "github_repo": "https://github.com/gundetiushaswini/qz",
      "pythonanyhwere":"https://ushaswini.pythonanywhere.com/",
    },
    {
    "id": 2,
      "title":"Google PLay Store EDA Project",
       "descrpition":"Performed Exploratory Data Analysis (EDA) on the Google Play Store dataset to analyze app trends, ratings, and user reviews. Identified key factors influencing app success and provided data-driven insights using Python",
       "technologies": [
        "python",
        "NUMPY",
        "PANDAS",
        "MATPLOTLIB",
        "JUPYTER",
        "GITHUB",

      ],
      "github_repo": "https://github.com/gundetiushaswini/python-project",
      
      },
{
    "id": 3,
      "title":"VijayPrakash ShoppingHub ",
      "descrpition":"Developed a feature-rich e-commerce platform inspired by Amazon, enabling users to browse products, add items to the cart, and manage authentication securely. Implemented a user-friendly UI with a responsive design and seamless navigation.",
      "technologies": [
        "ANGULAR 16 ",
        "Firebase Auth ",
        "HTML",
      
        "TAILWINDCSS",
        "GITHUB",

      ],
      "github_repo": "https://github.com/gundetiushaswini/angularproject",
      "netlify":"https://vijayaprakashshoppinghub.netlify.app/",
    },
  ];
  
  constructor() { }
}
