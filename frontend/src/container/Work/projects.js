import gnbEdge from '../../assets/projects/gnb-edge.svg';
import aiInterviewMocker from '../../assets/projects/ai-interview-mocker.svg';
import busManagement from '../../assets/projects/bus-management.jpg';
import arora from '../../assets/projects/arora.png';

export const projects = [
  {
    title: 'GNB Edge – Fleet Management System',
    description:
      'Enterprise fleet management platform with real-time telemetry, alerts and document workflows, serving web and mobile clients through Node.js and Python (gRPC) microservices with a WhatsApp/webhook alert pipeline.',
    imgUrl: gnbEdge,
    projectLink: 'https://app.gnbedge.in/',
    tags: ['Web App'],
  },
  {
    title: 'AI Interview Mocker',
    description:
      'Web app for practicing job interviews with AI-powered interviewers — adaptive question generation, detailed feedback and performance tracking for 100+ mock interviews. Built with Next.js, Node.js, MySQL and OpenAI.',
    imgUrl: aiInterviewMocker,
    projectLink: 'https://ai-interview-mocker-nu.vercel.app',
    codeLink: 'https://github.com/Amitansu-priyadarsan/AI-Interview-mocker',
    tags: ['Web App'],
  },
  {
    title: 'Bus Management System',
    description:
      'Built during my internship at Jindal Stainless Limited (JSL) — a comprehensive solution for efficiently managing employee information and streamlining bus services.',
    imgUrl: busManagement,
    projectLink: 'https://github.com/Amitansu-priyadarsan/BusManagmentSystem',
    codeLink: 'https://github.com/Amitansu-priyadarsan/BusManagmentSystem',
    tags: ['Web App'],
  },
  {
    title: 'Arora',
    description:
      'A cross-platform mobile application built with React Native, featuring authentication and a modern mobile UI.',
    imgUrl: arora,
    projectLink: 'https://github.com/Amitansu-priyadarsan/Arora',
    codeLink: 'https://github.com/Amitansu-priyadarsan/Arora',
    tags: ['Mobile App'],
  },
];
