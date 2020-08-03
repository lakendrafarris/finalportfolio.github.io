import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
          </div>
        </div>
        <div className="row">
          <div>
            <span>
              <i className="fa fa-phone-square" aria-hidden="true">
                (469) 558-3728
                    </i>
            </span>
            <span>

            </span>
          </div>
          <div>
            <span>
              <i className="fa fa-envelope" aria-hidden="true" href="lakendrafarris@aol.com" />
            </span>
            <span>
              lakendrafarris@aol.com
                </span>
          </div>
        </div>
      </section>
    );
  }
}