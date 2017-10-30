import React from 'react';
import Table from './table';
import axios from "axios";

class LoadApp extends React.Component{
    constructor(){
        super();
        this.state={
            allTime: "loading",
            recent: "loading",
            loading: true
        }
    }
    componentWillMount(){
        console.log(this.props);
    }
    componentDidMount(){
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(
            response => {
                this.setState({recent: response.data})
                axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(
                    response => {
                    this.setState({allTime: response.data, loading: false})
                })
            });
    }

    render() {
        let content;
        if(this.state.loading){
            content = <div>Loading...</div>
        } else {
            content = <Table data={this.state}/>
        }
        return (
            content
        );
    }
}

export default LoadApp;