import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

const API = 'http://api.tvmaze.com/search/shows?q=';
const DEFAULT_QUERY = 'girl';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        }}

    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(res => res.json())
            .then(function (res) {
                let data = [];
                for (let i = 0; i < res.length; i++) {
                    data[i] = res[i].show;
                }
                return data;
            })
            .then(data => this.setState({data}))
            // .then(res=>console.log(res[0].name))
            // .then(response => response.json())
            // .then(data => this.setState({ data }));
    }
    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - React Starter Kit`}</title>
        </Helmet>
      );
    }

    render() {
        const { data } = this.state;
      return (
        <section className="homePage_wrap">
          {this.head()}
          <div className="hero">
            <div className="content_wrap">
                <table border="1px">
                    <tbody>

                    {/*<tr><th>Show name</th><th>Language</th><th>Genres</th><th>Status of show</th><th>Rating</th></tr>*/}
                    <tr>
                    {data.map((res) =>
                        <td key={res.id}> {res.name}</td>
                    )}
                        </tr>
                    <tr>
                        {data.map((res) =>
                            <td key={res.id}> {res.language}</td>
                        )}
                    </tr>
                    <tr>
                        {data.map((res) =>
                            <td key={res.id}> {res.genres}</td>
                        )}
                    </tr>
                    <tr>
                        {data.map((res) =>
                            <td key={res.id}> {res.status}</td>
                        )}
                    </tr>
                    <tr>
                        {data.map((res) =>
                            <td key={res.id}> {res.rating.average}</td>
                        )}
                    </tr>
                    </tbody>
                </table>
                {/*<p> {this.state.data} </p>*/}
              <span className="msg">
              </span>
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
            <div className="pageScroll">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="main">
            <div className="spotlights">
              <div className="grid">
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default {
  component: HomePage
};