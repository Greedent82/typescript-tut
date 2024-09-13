## Typescript

TypeScript is largely just JavaScript with the ability to assign types. These types are primarily there to avoid confusion about what type of data is being passed around a variable. Take the example:

```javascript
function speak(extremelyVagueVariable) {
    console.log(extremelyVagueVariable)
}
```

Even in this basic example, we can't be sure if what the intention to be passed into the function is a sting, a number, an array, an object... you get the jist. It'd be up to others to read the context of everything around it, which is not a good strategy for when this might become legacy code. Here it is with typescript:

```typescript
function speak(lessVagueVariable: string){
    console.log(lessVagueVariable)
}
```

There are a few main types you can assign to things (the same as js) including 

```typescript
boolean //true or false declaration
number // self explanatory
string // a string of letters numbers and characters
```

Try it for yourself. Head over to `level1.ts` and see if you can write a console.log function in typescript!