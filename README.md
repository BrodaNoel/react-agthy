# React-Agthy

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4a1c51ba14464bf1a54cf6bea30bd488)](https://www.codacy.com/app/brodanoel/react-agthy?utm_source=github.com&utm_medium=referral&utm_content=BrodaNoel/react-agthy&utm_campaign=badger)

Agthy component for ReactJS sites.

## Usage
Install running `npm i --save react-agthy`

Implementation:
```js
import Agthy from 'react-agthy';
// ...

class App extends Component {
  render() {
    return (
      <div className="App">
        <Agthy />
      </div>
    );
  }
}

export default App;
```

## Customs styles
If you want to change any Agthy style, you can do it.
Just set the style you want for any of our Agthy elements.
All Agthy elements contains a class that starts with `Agthy-`
