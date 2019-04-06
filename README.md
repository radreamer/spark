# Spark Electron Application

## Installation

Clone the project and install dependecies: 

```
git clone git@github.com:radreamer/spark.git && cd spark
npm install
```

## Development

To run in the development mode:

```
npm start
```

## Build

You can build binaries using [electron-builder](https://github.com/electron-userland/electron-builder)

### MacOS

Build for `dmg` target:

```
npm run dist:mac
```

### Windows

Build for `NSIS` target for `x64` and `ia32` architectures:

```
npm run dist:win
```
