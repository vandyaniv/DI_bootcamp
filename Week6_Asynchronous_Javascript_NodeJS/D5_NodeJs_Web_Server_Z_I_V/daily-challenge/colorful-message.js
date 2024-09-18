import chalk from "chalk";

export const displayColorMessage = msg => {
    return chalk.bold.blue(msg)
}

export const displayErrorMessage = msg => {
    return chalk.bold.red(msg)
}