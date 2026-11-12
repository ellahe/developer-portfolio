
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
      role: 'My Contribution:\n' +
        '- Backend and frontend development.\n' +
        '- Designing business logic and data models.\n' +
        '- Building API-driven application features.\n' +
        '- Developing administrative interfaces.\n' +
        '- Implementing reusable components and maintaining application code quality.',
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
        'Business applications designed to manage sales workflows, inventory operations, product data, and reporting.',
      role: 'My Contribution:\n' +
        '- Developing sales and inventory management features.\n' +
        '- Implementing business logic and data operations.\n' +
        '- Designing and managing database structures.\n' +
        '- Developing reports using Stimulsoft Reports.\n' +
        '- Developing interfaces for business workflows.',
      technologies: [
        'C#',
        '.NET',
        'SQL Server',
        'Entity Framework',
        'ADO',
        'Dapper',
        'Angular',
        'Win forms',
        'Stimulsoft'
      ],
      icon: 'database'
    },
    {
      title: 'CRM & Business Management',
      category: 'Business Application',
      description:
        'CRM solutions designed to manage customer relationships, organize business workflows, and support daily business operations.',
      role: 'My Contribution:\n' +
        '- Developing backend features and business logic.\n' +
        '- Implementing customer data management.\n' +
        '- Building API endpoints and application services.\n' +
        '- Developing frontend features.',
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
        'Applications and APIs supporting payment-related business processes, service communication, and system integrations.',
      role: 'My Contribution:\n' +
        '- Developing backend features for payment processes.\n' +
        '- Implementing Web API endpoints.\n' +
        '- Building business logic and data operations.\n' +
        '- Supporting integration between application services.',
      technologies: [
        'C#',
        '.NET',
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
        'Software solutions designed to support healthcare workflows, manage application data, and address business requirements.',
      role: 'My Contribution:\n' +
        '- Developing application features based on business requirements.\n' +
        '- Implementing backend logic and data operations.\n' +
        '- Working with database structures and data management.\n' +
        '- Maintaining and improving application functionality.',
      technologies: [
        'C#',
        '.NET',
        'SQL Server',
        'Entity Framework',
        'Blazor'
      ],
      icon: 'monitor'
    },
    {
      title: 'NFC Card Integration',
      category: 'Hardware Integration',
      description:
        'An NFC integration project involving research and implementation of a service for reading and writing NFC cards.',
      role: 'My Contribution:\n' +
        '- Researching NFC technology and available libraries.\n' +
        '- Developing an NFC service for card communication.\n' +
        '- Implementing NFC card reading and writing operations.\n' +
        '- Integrating third-party libraries into the application.',
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
        'Integration with Microsoft Graph API and Microsoft Intune, including authentication, API communication, and service-layer implementation.',
      role: 'My Contribution:\n' +
        '- Exploring Microsoft Graph API documentation.\n' +
        '- Implementing authentication and API communication.\n' +
        '- Designing service-layer components.\n' +
        '- Integrating Microsoft services into the application.',
      technologies: [
        'C#',
        '.NET',
        'Microsoft Graph API',
        'Microsoft Intune',
        'REST API'
      ],
      icon: 'workflow'
    }
  ];

}
