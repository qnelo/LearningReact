# React

## Introducción

El presente repositorio tiene por proposito registrar lo aprendido de la librería React.

Se incluirán archivos md con explicaciones y conceptos además de archivos de código con ejemplos.

## Principios basicos

### Functions components & Class components

Los componentes pueden recibir "*props*" o propiedades como parámetros desde otro componente, estos pueden ser eventos o valores. Los componentes que solo manejan *props* son llamadas **Function components**

Los componentes pueden tener un estado, cuando el estado de la clase cambia, React renderiza nuevamente ese componente. Los componentes que manejan *props* y *states* son llamadas **Class components**
```
props -> function -> DOM

(state, props) -> component -> DOM
```
Las Class component extienden de React.Component.

**props**: Objeto con propiedades.

**state**: Objeto con estados, accesible solo en class components

### Manejo de estados

- El estado puede cambiar mintras los props se mantengan fijos, esto quiere decir que los componentes pueden cambiar sus estados internos, no sus propiedades.

- Las Class component deben tener un metodo llamado render

- El metodo `setState` se ocupa para cambiar el estado de los elementos del objeto state

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

Este primer ejemplo corre en https://jscomplete.com/repl/

Los estados se manejan en la class component App, por referencia se les pasa la funcion que maneja el estado del contador.

En la class component `Button` la función `handleClick` al ejecutar la función que viene en los props, modifica el estado `counter` de la clase `App`.

Con JSX y Virtual DOM componemos HTML con una sintaxis similiar a HTML y Javascript

ReactDOM.render() toma dos argumentos, el componente a renderizar y el elemento HTML en donde se va a alojar lo renderizado por React

`onClick`, `onChange`, `onSubmit` son eventos nativos de React

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
    return (
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
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode); // Renderiza el componente en el DOM del navegador
```

### Cards

Recomendación: Usar siempre *Functions components* a no ser que se necesite usar estados y cuando se necesite personalizar eventos.

En React, se necesita usar la palabra reservada "*className*" en lugar de solo *class* como atributo html, esto se logrará la coincidencia con la API del DOM de Javascript para los elementos CSS nombrados .

```jsx

//.info {
//  color: blue;
//}

const CardWithSCSStyle = (props) => {
    return (
        <div>
            <img src="http://placehold.it/75" />
            <div className="info">
                <div>Name here...</div>
                <div>Copany Name here...</div>
            </div>
        </div>
    );
};
```

Pero al trabajar con React se trata de manejar HTML con Javascript, por lo que hay otra forma de hacer este trabajo sin tener los problemas de manejo de CSS.

A la propiedad style, en vez de pasarle un string se le pasa un objeto en el que le especificaremos los estilos que esa etiqueta HTML queremos que utilice.

```jsx
const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeigth: 'bold' }}>
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
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

ReactDOM.render(<CardList cards={data} />, mountNode);
```

El siguiente bloque de codigo es la mejora del bloque anterior, en este ejemplo se consulta a la API de Github por los usuarios que en un formulario se buscan.

```jsx
const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeigth: 'bold' }}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

class Form extends React.Component {

    state = { userName: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(response => {
                this.props.onSubmit(response.data);
                this.setState({ userName: '' })
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="Nombre de usuario" required />
                <button type="submit">Agregar</button>
            </form>
        )
    }
}

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

class App extends React.Component {

    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```