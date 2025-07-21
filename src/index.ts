#!/usr/bin/env node
const main = async (): Promise<void> => {
  console.log('Hello from TypeScript Node.js!');

  // Example of proper typing
  const greeting: string = 'Welcome to your new project';
  const version: number = 1.0;

  console.log(`${greeting} - v${version}`);
};

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

main().catch((error: Error) => {
  console.error('Error in main:', error);
  process.exit(1);
});
