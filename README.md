# Angular with MicroFrontend

The idea is have one shell app and run other 2 angular apps inside it. I'm trying out with @angular-architects/module-federation


## Install

```
npm i --legacy-peer-deps
```

## Run all app at once
```
npm run run:all
```

## Run 1 app at the time:
The 2 apps work separated anyway: 

```
ng serve shell
```
```
ng serve mfe1
```
```
ng serve mfe2
```
