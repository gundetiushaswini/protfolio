import { Component } from '@angular/core';

import { ProjectsdataService } from '../../projectsdata.service';
@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects_data: any[] = [];

  constructor(public p: ProjectsdataService) {
    this.projects_data = this.p.projects_data;
  }
}
