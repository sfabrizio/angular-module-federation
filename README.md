# Angular +MicroFrontends

The idea is have one shell app and run two other angular apps inside it. I'm trying out with @angular-architects/module-federation


## Install

```
npm i --legacy-peer-deps
```

## Run all app at once
```
npm run run:all
```

## Run 1 app at the time:
The 3 apps work separated anyway: 

```
ng serve shell
```
```
ng serve mfe1
```
```
ng serve mfe2
```

### based on this tutorial: https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md

# TODO: 
- add manifest for real urls configs. point 4b
- update to ng 16+
