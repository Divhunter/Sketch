const fs = require("fs");
const path = require("path");

const buildPath = path.join(__dirname, "build", "static");

function renameFiles(dir, ext) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir).filter(file => file.startsWith("main.") && file.endsWith(ext));

  if (files.length > 0) {
    const oldFile = path.join(dir, files[0]);
    const newFile = path.join(dir, `main${ext}`);

    try {
      fs.renameSync(oldFile, newFile);
      console.log(`Renamed ${oldFile} -> ${newFile}`);
    } catch (error) {
      console.error(`Failed to rename ${oldFile} -> ${newFile}:`, error);
    }
  } else {
    console.log(`No file found for extension ${ext} in ${dir}`);
  }
}

// Renommer les fichiers JS et CSS
renameFiles(path.join(buildPath, "js"), ".js");
// renameFiles(path.join(buildPath, "js"), ".js.map");
renameFiles(path.join(buildPath, "css"), ".css");
// renameFiles(path.join(buildPath, "css"), ".css.map");

console.log("Renaming completed.");
