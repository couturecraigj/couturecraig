const gulp = require('gulp');
const slugify = require('slugify');
const fs = require('fs');
const { resolve } = require('path')
const { argv } = require('yargs');

const content = (name) => {
  return `---
title: ${name}
date: "${(new Date()).toISOString()}"
path: "/${slugify(name)}/"
draft: true
---
`
}

gulp.task('post:create', () => {
  const name = argv.name;
  const path = resolve('src/posts', name)
  const dir = path
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  if (fs.existsSync(resolve(path, 'index.md'))){
    throw new Error('This File already exists and you should not overwrite it.')
  }
  fs.writeFile(resolve(path, 'index.md'), content(name), 'utf8', (err) => {
    if (err) throw err;
  })
})

gulp.task('post:publish', () => {
  const name = argv.name;
  const path = resolve('src/posts', name)
  const dir = path
  
  if (!fs.existsSync(dir)){
    throw new Error('Cannot publish a Post that does not exist!')
  }
  fs.readFile(resolve(path, 'index.md'), (err, data) => {
    if (err) throw err;
    const string = data.toString()
    fs.writeFile(resolve(path, 'index.md'), string.replace(/date: "[\d\w:.-]+"/, `date: "${(new Date()).toISOString()}"`).replace('draft: true', 'draft: false'), 'utf8', (err) => {
      if (err) throw err;
    })
  })
})

gulp.task('post:unpublish', () => {
  const name = argv.name;
  const path = resolve('src/posts', name)
  const dir = path
  
  if (!fs.existsSync(dir)){
    throw new Error('Cannot un-publish a Post that does not exist!')
  }
  fs.readFile(resolve(path, 'index.md'), (err, data) => {
    if (err) throw err;
    const string = data.toString()
    fs.writeFile(resolve(path, 'index.md'), string.replace('draft: false', 'draft: true'), 'utf8', (err) => {
      if (err) throw err;
    })
  })
})