import os from "os";
import { exec } from "child_process";

function formatearEnv(text) {
  let textFormat = "";
  try {
    textFormat = text.replace(" ", "");
  } catch {
    textFormat = undefined;
  }
  return textFormat !== undefined ? textFormat : "";
}

const myos = os.type().toLowerCase();
const myenv = formatearEnv(process.env.CLEAN);

if (myos == "windows_nt" || myos.includes("windows")) {
  switch (myenv) {
    case "ALL":
      exec("rmdir /Q /S .vite");
      exec("rmdir /Q /S dist");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    case "VITE":
      exec("rmdir /Q /S .vite");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    case "BUILDER":
      exec("rmdir /Q /S dist");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    default:
      console.log(`Mode => CLEAN ${myenv}`);
      break;
  }
} else {
  switch (myenv) {
    case "ALL":
      exec("rm -r .vite -f");
      exec("rm -r dist -f");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    case "VITE":
      exec("rm -r .vite -f");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    case "BUILDER":
      exec("rm -r dist -f");
      console.log(`Mode => CLEAN ${myenv}`);
      break;
    default:
      console.log(`Mode => CLEAN ${myenv}`);
      break;
  }
}
