'use strict';

const e = React.createElement;

function Video() {
    return (
        <section className="sec sec-basica sec-basica-0 home-blog-articulo-reciente">
            <div className="responsivo centro">
                <div className="r-caja caja-auto" data-aos="fade-up">
                    <div className="sec-basica-5">
                        <h3>Hola</h3>
                    </div>
                </div>
            </div>
        </section>
);
}

class LikeButton extends React.Component {
    render() {
        return (
            Video()
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


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