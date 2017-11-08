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
Las class component extienden de React.Component
props: Objeto con propiedades
state: Objeto con estados, accesible solo en class components

### Manejo de estados

El estado puede cambiar mintras los props se mantengan fijos, los componentes pueden cambair sus estados internos, no sus propiedades.

Las class coomponent deben tener un metodo llamado render

El metodo setState se ocupa para cambiar el estado de los elementos del objeto state

```jsx
class Button extends React.Component {

    state = { counter: 0 }; // Equivale al constructor

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

Con JSX y Virtual DOM componemos HTML con una sintaxis similiar a HTML y javascript

ReactDOM.render() toma dos argumentos, el componente a renderizar y el elemento HTML en donde se va a alojar lo renderizado por React

onClick, onChange, onSubmit son eventos nativos de React

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

    state = { counter: 0 }; // Equivale al constructor

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

ReactDOM.render(<App />, mountNode); // Renderiza el componente en el DOM del navegador
```

### Card de github

Recomendación: Usar siempre functions components a no ser que se necesite usar estados y cuando se necesite personalizar eventos

En React, se necesita usar "className" en lugar de solo class, esto hara match con la API del DOM de javascript para los elementos que tengamos en un archivo de CSS con esos elementos

```jsx

//.info {
//	color: blue;
//}

const CardWithSCSStyle = (props) => {
	return (
  	<div>
  	  <img src="http://placehold.it/75"/>
      <div className="info"> 
      	<div>Name here...</div>
        <div>Copany Name here...</div>
      </div>
  	</div>
  );
};
```

Pero React se trata de manejar HTML con javascript, por lo que hay otra forma de hacer este trabajo sin tener los problemas de manejo de CSS

A la propiedad style, que es como los eventos, en vez de pasarle un string se le pasa un objeto en el que le especificaremos los elementos que ese elemento queremos que utilice

```jsx
const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} />
            <div style={{display:'inline-block', marginLeft:10}}> 
                <div style={{fontSize: '1.25em', fontWeigth: 'bold'}}>
                    {props.name}
                </div>
            <div>{props.company}</div>
        </div>
        </div>
    );
};

const data = [
    {
        name: "K",
        avatar_url: "https://avatars2.githubusercontent.com/u/4587858?s=460&v=4",
        company: "Becual"
    },
    {
        name: "KK",
        avatar_url: "https://avatars2.githubusercontent.com/u/4587858?s=460&v=4",
        company: "Becual Becual"
    },
]

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    );
};

ReactDOM.render(<CardList cards={data}/>, mountNode);
```