#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const path = require('path');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    if (args['--start']) {
        const pkg = require(path.join(process.cwd(), 'package.json'));
        //TODO: do something with the package
        console.log(chalk.bgCyanBright('Starting the app...'));
    }
} catch (err) {
    console.log(chalk.yellow(err.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}