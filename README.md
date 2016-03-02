# Importing JSON Files Lab

## Objectives

1. Implement a JSON config file
1. Implement file which imports JSON
1. Use JSON in the file/script

## Introduction

Almost every application has some sort of static information. This could be data (e.g., list of customers) or configuration (e.g., server settings). JSON provides a human-readable and rather compact format for storing static information.

In this lab, you'll learn how to import a JSON file. The file will have database configurations for different environments (development and production) such as domain, port, and name. This information can be used later to connect to the development and production databases.

## Instructions

1. Create a file `database.json` in `config` folder
2. Copy object from the snippet below into `module.js` and convert it to a **valid** JSON
3. Create a file `main.js`
4. Import your configuration module in `main.js` with `require()`
5. Use `path.join()` and `__dirname` for the path to `database.json` to make your script more robust. Refer to `node-global` if you forgot what `__dirname` is.
5. In `main.js`, extract the `domain` and `port` values of the `dev` property, and export them separated by `:` and without spaces.
6. Keep `main.js` in the repository root folder (folder of this `README.md` file)
6. Run tests to verify your solution.

### Extra Info

The configuration object:

```js
{
  dev: {
    domain: 'http://webapplog.com',
    port: 27017,
    name: 'dev-db'
 },
 prod: {
   domain: 'http://webapplog.com',
   port: 27018,
   name: 'prod-db'
 }
}
```

Note: The port value and domain in the JSON file don't matter. You can swap your own values. The test will read from the same file `config/database.json`.