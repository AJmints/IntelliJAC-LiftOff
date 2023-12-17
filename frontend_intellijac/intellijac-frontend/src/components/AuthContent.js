//import * as React from 'react';
//import { request } from '../axios_helper';
//
//export default class authContent extends React.Component {
//constructor(props) {
//super(props);
//this.state ={
//data : []
//};
//};
//componentDidMount() {
//request(
//"GET",
//"/messages",
//{}
//).then((response) => {
//this.setState({data : response.data})
//});
//};
//
//render() {
//return (
//<div>
//{this.state.data && this.state.data.map((line) => <p>{line}</p>
//)}
//</div>
//);
//};
//}
//
import React, { Component } from 'react';
//import { request } from '../axios_helper';
import fetchService from '../fetchService';

class AuthContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

//  componentDidMount() {
//    request("GET", "http://localhost:8080/api", {})
//      .then((response) => {
//        this.setState({ data: response.data, error: null });
//      })
//      .catch((error) => {
//        console.error("Error fetching data:", error);
//        this.setState({ error });
//      });
//  }

componentDidMount() {
    fetchService.getUsers().then((res) => {
    this.setState({data: res});
    });
}

  render() {
    const { data, error } = this.state;

    return (
      <div>
        {error ? (
          <p>Error fetching data. Please try again later.</p>
        ) : (
          Array.isArray(data) &&
          data.map((line, index) => <p key={index}>{line}</p>)
        )}
      </div>
    );
  }
}

export default AuthContent;
