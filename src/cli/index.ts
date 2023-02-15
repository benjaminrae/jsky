import {
  askForHooks,
  askForJsx,
  askForPackageManager,
  askForTypescript,
} from "./prompts.js";

const hasTypescript = await askForTypescript();

const hasJsx = await askForJsx();

const hooks = await askForHooks();

const packageManager = await askForPackageManager();

const answers = { hasTypescript, hasJsx, hooks, packageManager };
