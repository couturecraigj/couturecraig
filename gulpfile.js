const gulp = require('gulp')
const slugify = require('slugify')
const fs = require('fs')
const copydir = require('copy-dir');
const { resolve, join } = require('path')
const { argv } = require('yargs')

const content = ({ name, author = 'Craig Couture' }) => {
  return `---
title: "${name}"
date: "${new Date().toISOString()}"
path: "/${slugify(name.toLowerCase())}/"
author: "${author}"
keywords:
draft: true
---
`
}

gulp.task('post:create', () => {
  const name = argv.name
  const draftPath = resolve('src/posts/drafts', slugify(name.toLowerCase()))
  const dir = draftPath

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  if (fs.existsSync(resolve(draftPath, 'index.md'))) {
    throw new Error('This File already exists and you should not overwrite it.')
  }
  fs.writeFile(resolve(draftPath, 'index.md'), content(argv), 'utf8', err => {
    if (err) throw err
  })
})

gulp.task('post:publish', () => {
  const name = argv.name
  const draftPath = resolve('src/posts/drafts', slugify(name.toLowerCase()))
  const dir = draftPath

  if (!fs.existsSync(dir)) {
    throw new Error('Cannot publish a Post that does not exist!')
  }
  fs.readFile(resolve(draftPath, 'index.md'), (err, data) => {
    if (err) throw err
    const string = data.toString()
    const date = new Date()
    let path = 'src/posts'
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
    for (let i of [
      '' + date.getFullYear(),
      '' + (date.getMonth() + 1),
      '' + date.getDate(),
      slugify(name.toLowerCase()),
    ]) {
      path = join(path, i)
      if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
      }
    }

    copydir.sync(draftPath, path)

    fs.writeFile(
      resolve(path, 'index.md'),
      string
        .replace(/date: "[\d\w:.-]+"/, `date: "${date.toISOString()}"`)
        .replace(/path: "([\/\d\w:.-]+)"/, `path: "/${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()}/${slugify(name.toLowerCase())}/"`)
        .replace('draft: true', 'draft: false'),
      'utf8',
      err => {
        if (err) throw err
        fs.unlinkSync(join(draftPath, 'index.md'))
        fs.readdirSync(draftPath).forEach(file => {
          fs.unlinkSync(join(draftPath, file))
        })
        fs.rmdirSync(draftPath)
      }
    )
  })
})

gulp.task('post:unpublish', () => {
  const name = argv.name
  const path = resolve('src/posts', slugify(name.toLowerCase()))
  const dir = path

  if (!fs.existsSync(dir)) {
    throw new Error('Cannot un-publish a Post that does not exist!')
  }
  fs.readFile(resolve(path, 'index.md'), (err, data) => {
    if (err) throw err
    const string = data.toString()
    fs.writeFile(
      resolve(path, 'index.md'),
      string.replace('draft: false', 'draft: true'),
      'utf8',
      err => {
        if (err) throw err
      }
    )
  })
})
