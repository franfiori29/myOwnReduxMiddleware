import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, fetchPosts } from './actions';
import _ from 'lodash';

class Componente extends Component {
    componentDidUpdate = () => {
        console.log(!_.isEmpty(this.props.posts))
        console.log(this.props.posts.title)
    }
    render() {
        return (
            <div className="App" >
                <h1>{this.props.count}</h1>
                <button onClick={this.props.increment}>Incrementar</button>
                <button onClick={this.props.decrement}>Decrementar</button>
                <button onClick={() => this.props.fetchPosts(this.props.count)}>Fetch</button>
                {!_.isEmpty(this.props.posts) && <h1>TITLE: {this.props.posts.title}</h1>}
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fetchPosts: (id) => dispatch(fetchPosts(id))
});



export default connect(mapStateToProps, mapDispatchToProps)(Componente);
