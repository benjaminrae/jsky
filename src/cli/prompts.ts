import inquirer from "inquirer";
import {
  hooksQuestion,
  jsxQuestion,
  packageManagerQuestion,
  typescriptQuestion,
} from "./questions";

export const askForTypescript = async () => {
  const { hasTypescript } = await inquirer.prompt<{
    hasTypescript: boolean;
  }>([typescriptQuestion]);

  return hasTypescript;
};

export const askForJsx = async () => {
  const { hasJsx } = await inquirer.prompt<{
    hasJsx: boolean;
  }>([jsxQuestion]);

  return hasJsx;
};

export const askForPackageManager = async () => {
  const { packageManager } = await inquirer.prompt<{ packageManager: string }>([
    packageManagerQuestion,
  ]);

  return packageManager;
};

export const askForHooks = async () => {
  const { hooks } = await inquirer.prompt<{
    hooks: string[];
  }>([hooksQuestion]);

  return hooks;
};
