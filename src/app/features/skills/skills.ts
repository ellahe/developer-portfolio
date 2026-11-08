import { Component } from '@angular/core';

import {
  LucideDynamicIcon,
  LucideCode,
  LucideDatabase,
  LucideMonitor,
  LucideWorkflow,
  LucideWrench,
  LucideServer,
  LucideGlobe,
  LucideLayers,
  LucidePalette,
  LucideBlocks,
  LucideShieldCheck,
  LucideBoxes,
  LucideGitBranch,
  LucideContainer,
  LucideNetwork,
  LucideRadio
} from '@lucide/angular';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  readonly iconMap: Record<string, any> = {
    code: LucideCode,
    database: LucideDatabase,
    monitor: LucideMonitor,
    workflow: LucideWorkflow,
    wrench: LucideWrench,
    server: LucideServer,
    globe: LucideGlobe,
    layers: LucideLayers,
    palette: LucidePalette,
    blocks: LucideBlocks,
    'shield-check': LucideShieldCheck,
    boxes: LucideBoxes,
    'git-branch': LucideGitBranch,
    container: LucideContainer,
    network: LucideNetwork,
    radio: LucideRadio
  };


  readonly categories: SkillCategory[] = [
    {
      title: 'Backend Development',
      description: 'Building robust APIs and scalable services with .NET',
      icon: 'code',
      featured: true,
      skills: [
        { name: 'C#', icon: 'code' },
        { name: '.NET', icon: 'code' },
        { name: 'ASP.NET Core', icon: 'server' },
        { name: 'Web API', icon: 'globe' },
        { name: 'Entity Framework', icon: 'database' },
        { name: 'Dapper', icon: 'layers' },
        { name: 'ADO.NET', icon: 'database' }
      ]
    },
    {
      title: 'Database',
      description: 'Data modeling and management',
      icon: 'database',
      skills: [
        { name: 'SQL Server', icon: 'database' },
        { name: 'PostgreSQL', icon: 'database' }
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Creating modern and responsive interfaces with Angular',
      icon: 'monitor',
      featured: true,
      skills: [
        { name: 'Angular', icon: 'code' },
        { name: 'TypeScript', icon: 'code' },
        { name: 'JavaScript', icon: 'code' },
        { name: 'HTML5', icon: 'code' },
        { name: 'SCSS', icon: 'palette' }
      ]
    },
    {
      title: 'Architecture & Principles',
      description: 'Designing maintainable software',
      icon: 'workflow',
      skills: [
        { name: 'Clean Architecture', icon: 'layers' },
        { name: 'DDD', icon: 'blocks' },
        { name: 'SOLID', icon: 'shield-check' },
        { name: 'OOP', icon: 'boxes' }
      ]
    },
    {
      title: 'Tools & Technologies',
      description: 'Development workflow and tools',
      icon: 'wrench',
      skills: [
        { name: 'Git', icon: 'git-branch' },
        { name: 'Docker', icon: 'container' },
        { name: 'Redis', icon: 'database' },
        { name: 'RabbitMQ', icon: 'network' },
        { name: 'SignalR', icon: 'radio' },
        {name: 'Jira', icon: 'workflow'},
        {name: 'TFS', icon: 'git-branch'}
      ]
    }
  ];
}
