# Heartsure

## Usage

First install the development dependencies:

```bash
npm install
```

To generate the files for development and watch for changes, use:

```bash
npm run serve
```

To generate the files for production, use:

```bash
npm run build
```

## Overview

The theme will be generated into `dist`. This folder is wiped before every run, so do not make any changes in this folder.

Files without the extensions `js|scss|woff|woff2|eot|ttf|otf` will be copied to the build directory.

### Development

SASS to CSS  
JS (Babel)

### Production

SASS to CSS (Autoprefixer, cssnano)  
JS (Babel, UglifyJS)  
Images (jpg, png, gif, svg with Imagemin)
