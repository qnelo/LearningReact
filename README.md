# React

## Introducción

El presente repositorio tiene por proposito registrar lo aprendido de la librería React.

Se incluirán archivos md con explicaciones y conceptos además de archivos de código con ejemplos.

## Principios basicos

### Functions components & class components

Los componentes reciben el estado interno privado que controla la salida, cuando el estado de la clase cambia, React renderiza nuevamente ese componente
```
props -> function -> DOM

(state, props) -> component -> DOM
```

### Manejo de estados

El estado puede cambiar mintras los props se mantengan fijos, los componentes pueden cambair sus estados internos, no sus propiedades.

Las class coomponent deben tener un metodo llamado render

```jsx
class Button extends React.Componet {

    state = { counter: 0 }; // equivale al constructor

    // setState Metodo built-in de React disponible en todas las instancias de componentes
    
    handleClick = () => {
        this.setState((prevState) => ({
            counter: this.prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handlerClick}>
                {this.state.counter}
            </button>
        )
    }
}
```
### Creando una App

Este ejemplo corre en https://jscomplete.com/repl/

Los estados se manejan en la class component App, por referencia se les pasa las funciones que maneja el estado del contador

```jsx
class Button extends React.Component {

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    }

  render() {
      return (
          <button onClick={this.handleClick}>
              +{this.props.incrementValue}
          </button>
      )
  }
}

const Result = (props) => {
    return(
        <div>{props.counter}</div>
    )
}

class App extends React.Component {

    state = { counter: 0 }; // equivale al constructor

    // setState Metodo built-in de React disponible en todas las instancias de componentes

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: this.state.counter + incrementValue
        }));
    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode);
```