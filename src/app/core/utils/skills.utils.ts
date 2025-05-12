import { Skill } from "@models/interfaces";

export function getSkills(): Skill[] {
  return [
    // Databases & Backend Services
    { name: 'Appwrite', lightIcon: 'assets/images/skills/light/appwrite.svg' },
    { name: 'Firebase', lightIcon: 'assets/images/skills/light/firebase.svg' },
    { name: 'Supabase', lightIcon: 'assets/images/skills/light/supabase.svg' },
    { name: 'Pocketbase', lightIcon: 'assets/images/skills/light/pocketbase.svg' },
    { name: 'Nhost', lightIcon: 'assets/images/skills/light/nhost.svg', darkIcon: 'assets/images/skills/dark/nhost.svg' },
    { name: 'Circle CI', lightIcon: 'assets/images/skills/light/circleci.svg', darkIcon: 'assets/images/skills/dark/circleci.svg' },
    { name: 'CI/CD', lightIcon: 'assets/images/skills/light/actions.svg' },

    // Development Tools
    { name: 'Copilot', lightIcon: 'assets/images/skills/light/copilot.svg', darkIcon: 'assets/images/skills/dark/copilot.svg' },
    { name: 'VS Code', lightIcon: 'assets/images/skills/light/vscode.svg', darkIcon: 'assets/images/skills/dark/vscode.svg' },
    { name: 'IntelliJ', lightIcon: 'assets/images/skills/light/intellij.svg' },
    { name: 'Figma', lightIcon: 'assets/images/skills/light/figma.svg' },
    { name: 'Postman', lightIcon: 'assets/images/skills/light/postman.svg' },
    { name: 'GraphQL', lightIcon: 'assets/images/skills/light/graphql.svg' },
    { name: 'Raspberry Pi', lightIcon: 'assets/images/skills/light/raspberrypi.svg' },

    // DevOps & Databases
    { name: 'Docker', lightIcon: 'assets/images/skills/light/docker.svg' },
    { name: 'MySQL', lightIcon: 'assets/images/skills/light/mysql.svg', darkIcon: 'assets/images/skills/dark/mysql.svg' },
    { name: 'PostgreSQL', lightIcon: 'assets/images/skills/light/postgresql.svg' },
    { name: 'Redis', lightIcon: 'assets/images/skills/light/redis.svg' },
    { name: 'Prisma', lightIcon: 'assets/images/skills/light/prisma.svg', darkIcon: 'assets/images/skills/dark/prisma.svg' },
    { name: 'Prettier', lightIcon: 'assets/images/skills/light/prettier.svg' },
    { name: 'editorconfig', lightIcon: 'assets/images/skills/light/editorconfig.svg' },

    // Frontend Core
    { name: 'HTML', lightIcon: 'assets/images/skills/light/html.svg' },
    { name: 'CSS', lightIcon: 'assets/images/skills/light/css.svg' },
    { name: 'JavaScript', lightIcon: 'assets/images/skills/light/js.svg' },
    { name: 'Angular', lightIcon: 'assets/images/skills/light/angular.svg' },
    { name: 'React', lightIcon: 'assets/images/skills/light/react.svg' },
    { name: 'TypeScript', lightIcon: 'assets/images/skills/light/typescript.svg' },
    { name: 'Next.js', lightIcon: 'assets/images/skills/light/nextjs.svg' },

    // Libraries & Frameworks
    { name: 'Zod', lightIcon: 'assets/images/skills/light/zod.svg' },
    { name: 'i18next', lightIcon: 'assets/images/skills/light/i18next.svg' },
    { name: 'Laravel', lightIcon: 'assets/images/skills/light/laravel.svg' },
    { name: 'Python', lightIcon: 'assets/images/skills/light/python.svg' },
    { name: 'Tailwindcss', lightIcon: 'assets/images/skills/light/tailwindcss.svg' },
    { name: 'Sass/Scss', lightIcon: 'assets/images/skills/light/sass.svg' },
    { name: 'Material UI', lightIcon: 'assets/images/skills/light/materialui.svg' },

    // More Frameworks & Tools
    { name: 'Shadcn', lightIcon: 'assets/images/skills/light/shadcn.svg', darkIcon: 'assets/images/skills/dark/shadcn.svg' },
    { name: 'WordPress', lightIcon: 'assets/images/skills/light/wordpress.svg', darkIcon: 'assets/images/skills/dark/wordpress.svg' },
    { name: 'Git', lightIcon: 'assets/images/skills/light/git.svg' },
    { name: 'Mocha', lightIcon: 'assets/images/skills/light/mocha.svg' },
    { name: 'Jest', lightIcon: 'assets/images/skills/light/jest.svg' },
    { name: 'Jasmine', lightIcon: 'assets/images/skills/light/jasmine.svg' },
    { name: 'Spring Boot', lightIcon: 'assets/images/skills/light/spring.svg' },

    // Mobile & Backend
    { name: 'Flutter', lightIcon: 'assets/images/skills/light/flutter.svg' },
    { name: 'Dart', lightIcon: 'assets/images/skills/light/dart.svg' },
    { name: 'Go', lightIcon: 'assets/images/skills/light/golang.svg' },
    { name: 'Node.js', lightIcon: 'assets/images/skills/light/nodejs.svg' },
    { name: 'Express.js', lightIcon: 'assets/images/skills/light/expressjs.svg', darkIcon: 'assets/images/skills/dark/expressjs.svg' },
    { name: 'Nest.js', lightIcon: 'assets/images/skills/light/nestjs.svg' },
    { name: 'Socket.io', lightIcon: 'assets/images/skills/light/socketio.svg', darkIcon: 'assets/images/skills/dark/socketio.svg' }
  ]
}
