import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="/contact">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a
              href={`mailto:couturecraigj@gmail.com`}
              className="underline--magical"
            >
              couturecraigj@gmail.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone</h3>
            <a href="tel:1-802-387-0237" className="underline--magical">
              (802) 387-0237 (Google Voice)
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              442 Pako Ave.<br />
              Keene, NH 03431<br />
              United States of America
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
