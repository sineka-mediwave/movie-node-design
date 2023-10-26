# Movie design with api

- create a react app using vite
- install packages `npm i react-router-dom axios`

## Creating Pages

- Every project must have indexPage and NotfoundPage
- add other pages using lazy and suspense
- Typescript for layout (reference)[https://stackoverflow.com/questions/64722861/what-typescript-type-should-react-children-be-set-to]

```
interface ILayout {
  title: string;
  children: React.ReactNode;
}
```
