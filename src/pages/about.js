import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import SecondaryBanner from '../components/SecondaryBanner'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <div>
    <Helmet>
      <title>{`About | CoutureCraig.com`}</title>
      <meta name="description" content="Generic Page" />
    </Helmet>
    <SecondaryBanner title="About" style={1} description="What makes me, me" />
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h2>About Craig</h2>
          <h3>Personal</h3>
          <p>
            I was born and raised in the Northeast and spent my childhood near
            the Upper Valley. I went to college in Southern California and found
            it to be far from the paradise TV makes it out to be so I came back
            to New England to settle down in Keene, NH. When I did I shortly
            thereafter met my now wife who was finishing her PhD at Purdue. As a
            result I got very familiar with Indiana and found myself flying to
            meet her. Fast-forward about ~{new Date().getFullYear() - 2012}{' '}
            years and we now have 2 beautiful children and a house.
          </p>
          <p>
            My wife is so smart and I am so lucky to have her at home with my
            children to make sure they are raised to be good contributors of
            society.
          </p>
          <h3>Career</h3>
          <p>
            I spent most of my childhood gawking at technology and always
            wanting to figure out how things work. For me ignorance was not
            bliss but knowledge definitely brought thirst for more. As a result
            I have 3 years Vocational Tech education in engineering/architecture
            but found the environment far too sterile.
          </p>
          <p>
            As I moved on to College I tried to shift focus into a more
            analytical environment where textual criticism is import and
            independent thought is a must. I pursued Theology/Philosophy and
            found the critical thinking as well as the need for looking at
            things from different angles caused me to grow tremendously in my
            ability to grapple with difficult problems. As I finished college I
            had also started to desire to run my own business at that point I
            thought it would be a good idea to pursue being a fitness
            professional but that would become a slightly less likely path as my
            final months drew near I severely injured my shoulder in an
            intramural ultimate frisbee tournament. Which made me question if I
            would be putting my body under more stress by going down the path of
            fitness trainer.
          </p>
          <p>
            I had to have surgery to correct the injury and was laid up for
            about 12 months. This made life pretty difficult for me as I was
            trying to figure out what direction I should go. After a few
            short-term jobs I found myself working for{' '}
            <a href="https://en.wikipedia.org/wiki/C%26S_Wholesale_Grocers">
              C&S Wholesale Grocers.
            </a>{' '}
            They like many companies do not care about Customer Service and I
            found myself working in the Customer Service department for my
            position. As I was working I noticed a terribly disunity in the type
            of work being done. I saw workers coming into to cubicles where they
            literally had so many post-it notes up that you could not see their
            wall or desk. I saw people getting trained and then quitting because
            it was too much to remember. I was seeing people opening 21
            different excel sheets to track things like whether a store was a
            drop or no drop.
          </p>
          <p>
            Though I was just a lowly Customer Service Rep I decided to take it
            upon myself to fix what I saw wrong. I started tying all the
            different sheets together so that there was one sheet being used
            through VLOOKUPs to make it possible to view all information from
            one screen. I also made it so that you could quickly identify what
            Customer group a certain Customer Number was associated with to
            prevent people having to memorize. I also went and created some
            other things that I thought would be useful like a quick email
            generator from the tool for repetitive emails.
          </p>
          <p>
            When I was finished with creating my tool and found it useful for
            myself, I presented it to my boss. But my boss thought I was
            stepping on her toes so she did not do anything about it. Then I got
            ambitious I told my boss's boss but he was lazy and did not ever
            seem to want to do any work. So then I swung for the fences and took
            it to my boss's boss's boss and she listened and wanted to see what
            it was. She was so impressed that she took it immediately to her
            Boss and shortly after I was working directly for him with a change
            in title and pay. I hate the listening to excuses about how 'this is
            the way we have always done it' and am always looking to improve.
            What this showed me was that I cannot take no as a failure
            especially if I believe in what I am trying to sell. I followed this
            trajectory throughout my career though. I did not go to school for
            process automation but found a real home in this type of realm.
          </p>
          <p>
            Since working for C&S and breaking out of the call center I have
            done many empowering things. Unknowingly created a graph database
            structure using graph theory and Salesforce' built in Object tables
            for better call flow. I learned complete Website development and
            architecture as well as all the practices for back-end development.
            I have gotten deep into JavaScript APIs, Node.js, React.js, Apex,
            Visualforce, CSS, Neo4j and many more. I now have many side projects
            that I am working on as well as my fulltime job working for U.S.
            Security Associates as a Salesforce Developer/Admin/Architect.
          </p>
        </div>
      </section>
    </div>
  </div>
)

export default Landing
