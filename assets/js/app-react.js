'use strict';

/**
 * Funciones principales
 */

function runElement(rce, componente, odjectDoom) {
    const domContainer = document.querySelector(odjectDoom);
    const root = ReactDOM.createRoot(domContainer);
    root.render(rce(componente));
}

/**
 * Componentes
 */

const e = React.createElement;

/**
 * Cuerpo
 */

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};
function barraTitulo11() {
    return (
        <section className="sec sec-basica sec-basica-10 home-blog-articulo-reciente">
            <div className="responsivo centro">
                <div className="r-caja caja" data-aos="fade-up">
                    <div className="sec-basica-5">
                        <h1>{user.name}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
class barraTituloRun extends React.Component {
    render() {
        return (
            barraTitulo11()
        );
    }
}

/**
 * Runs
 */
runElement(e, barraTituloRun, '#like_button_container');

/*const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));*/


/*'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        /*return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );*//*
        // Display a "Like" <button>
        return (
            <button onClick={() => this.setState({liked: true})}>
                Like no po
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));*/