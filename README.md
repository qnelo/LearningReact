# React

Los componentes reciben el estado interno privado que controla la salida, cuando el estado de la clase cambia, React renderiza nuevamente ese componente
```
props -> function -> DOM

(state, props) -> component -> DOM
```
El estado puede cambiar mintras los props se mantengan fijos, los componentes pueden cambair sus estados internos, no sus propiedades.

Las class coomponent deben tener un metodo llamado render

```
class Button extends React.Componet {

    state = { counter: 0 }; // equivale al constructor

    // setState Metodo built-in de React disponible en todas las instancias de componentes
    
    handleClick = () => {
        this.setState((prevState) => ({
            counter: this.state.counter + 1
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