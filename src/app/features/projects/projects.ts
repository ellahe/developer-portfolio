
import { Component } from '@angular/core';

import {
  LucideCode,
  LucideDatabase,
  LucideMonitor,
  LucideWorkflow,
  LucideRadio,
  LucideGlobe,
  LucideUserRound
} from '@lucide/angular';

interface Project {
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  icon: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LucideCode,
    LucideDatabase,
    LucideMonitor,
    LucideWorkflow,
    LucideRadio,
    LucideGlobe,
    LucideUserRound
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  readonly projects: Project[] = [
    {
      title: 'E-Commerce CMS',
      category: 'Web Application',
      description:
        'An administration platform for managing products, inventory, orders, and e-commerce operations.',
      role: 'Full-Stack Development',
      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Angular',
        'TypeScript',
        'SQL Server'
      ],
      icon: 'code',
      featured: true
    },
    {
      title: 'Sales & Inventory Management',
      category: 'Business Application',
      description:
        'Business applications focused on sales workflows, inventory operations, data management, and reporting.',
      role: 'Full-Stack Development',
      technologies: [
        'C#',
        '.NET',
        'SQL Server',
        'Entity Framework',
        'Angular'
      ],
      icon: 'database'
    },
    {
      title: 'CRM & Business Management',
      category: 'Business Application',
      description:
        'Development of CRM solutions for managing customer relationships, business workflows, and operational data.',
      role: 'Full-Stack Development',
      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Angular',
        'SQL Server'
      ],
      icon: 'workflow'
    },
    {
      title: 'Payment Systems',
      category: 'Financial Application',
      description:
        'Development of application features and APIs supporting payment-related business processes and integrations.',
      role: 'Backend Development',
      technologies: [
        'C#',
        'ASP.NET Core',
        'Web API',
        'SQL Server'
      ],
      icon: 'globe'
    },
    {
      title: 'Healthcare Applications',
      category: 'Healthcare',
      description:
        'Development of software solutions for healthcare-related workflows, data handling, and business requirements.',
      role: 'Software Development',
      technologies: [
        'C#',
        '.NET',
        'SQL Server',
        'Entity Framework'
      ],
      icon: 'monitor'
    },
    {
      title: 'NFC Integration',
      category: 'Hardware Integration',
      description:
        'Research and implementation of an NFC service for reading and writing NFC cards.',
      role: 'Backend & Hardware Integration',
      technologies: [
        'C#',
        '.NET',
        'NFC',
        'Third-Party Libraries'
      ],
      icon: 'radio'
    },
    {
      title: 'Microsoft Graph & Intune',
      category: 'API Integration',
      description:
        'Integration with Microsoft Graph API and Intune, including authentication and service-layer implementation.',
      role: 'Backend Development',
      technologies: [
        'C#',
        '.NET',
        'Microsoft Graph API',
        'Intune',
        'REST API'
      ],
      icon: 'workflow'
    }
  ];
}
