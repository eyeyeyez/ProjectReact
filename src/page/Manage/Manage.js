import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import '../../styles/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'
import './manage.css';

class Manage extends Component {
  render() {
    return (
      <div className="manage">
        <Navbar/> <br/>
        <div class="ui centered cards">
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/steve.jpg" />
            <div class="header">Steve Sanders</div>
            <div class="meta">Friends of Elliot</div>
            <div class="description">Steve wants to add you to the group <strong>best friends</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/jenny.jpg" />
            <div class="header">Jenny Lawrence</div>
            <div class="meta">New User</div>
            <div class="description">Jenny requested permission to view your contact details</div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
            <div class="header">Molly Thomas</div>
            <div class="meta">New User</div>
            <div class="description">Molly wants to add you to the group <strong>musicians</strong>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui green basic button" role="button">Approve</button>
              <button class="ui red basic button" role="button">Decline</button>
            </div>
          </div>
        </div>
      </div>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default Manage;