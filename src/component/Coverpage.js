import React from "react";
import "./Coverpage.scss";
import { FaFeatherAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Coverpage = () => {
  return (
    <div className="container">
      <div className="front-cover">
        <h1 className="heading-1">The story of the Heer</h1>
        <p className="intro">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          consectetur, dolorum aut iusto vitae placeat eveniet tempora
          assumenda, quae officia molestias dolor accusamus maiores earum
          quisquam eaque atque labore error.
        </p>
      </div>

      {/* story intro  */}

      <div className="story-intro">
        <div className="feather">
          <FaFeatherAlt className="icon" />
        </div>
        <h2 className="heading-2">Coming soon ......</h2>
        <div className="intro">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio totam
          itaque quam inventore, quos cum obcaecati, sapiente magnam reiciendis,
          consequuntur repudiandae esse dicta laborum? Molestiae obcaecati
          veniam earum quod quasi! Ullam quia sunt non repudiandae excepturi
          quod facere autem ipsum laudantium veniam quas, ad rerum doloribus id
          fuga ex sit molestiae dignissimos consequatur dolores est animi?
          Maiores quo quaerat aspernatur. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Odio totam itaque quam inventore, quos
          cum obcaecati, sapiente magnam reiciendis, consequuntur repudiandae
          esse dicta laborum? Molestiae obcaecati veniam earum quod quasi! Ullam
          quia sunt non repudiandae excepturi quod facere autem ipsum laudantium
          veniam quas, ad rerum doloribus id fuga ex sit molestiae dignissimos
          consequatur dolores est animi? Maiores quo quaerat aspernatur.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Odio totam itaque
          quam inventore, quos cum obcaecati, sapiente magnam reiciendis,
          consequuntur repudiandae esse dicta laborum? Molestiae obcaecati
          veniam earum quod quasi! Ullam quia sunt non repudiandae excepturi
          quod facere autem ipsum laudantium veniam quas, ad rerum doloribus id
          fuga ex sit molestiae dignissimos consequatur dolores est animi?
          Maiores quo quaerat aspernatur.
        </div>
        <div className="feather">
          <FaFeatherAlt className="icon" />
        </div>
      </div>

      {/* scenes */}

      <div className="scenes">
        <h1 className="heading">Shorts of story</h1>
        <div className="scenes-1">
          <img
            src="https://i.pinimg.com/originals/24/e2/c1/24e2c16aa069bd62ba856fedf06748ee.png"
            alt=""
            className="scenes-1__img"
          />
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
        </div>

        {/* scene 2 */}

        <div className="scenes-1">
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
          <img
            src="https://i.pinimg.com/originals/f4/76/5e/f4765e86c1a31dda48764d5033e07156.png"
            alt=""
            className="scenes-1__img"
          />
        </div>

        {/* scene 3 */}
        <div className="scenes-1">
          <img
            src="https://i.pinimg.com/originals/e2/84/17/e28417b681ef1a8002de37c4b9a2e730.jpg"
            alt=""
            className="scenes-1__img"
          />
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
        </div>

        {/* scene 4 */}

        <div className="scenes-1">
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>

          <img
            src="https://i.pinimg.com/originals/d4/a4/b9/d4a4b927dd801adbee279f7a22230f67.png"
            alt=""
            className="scenes-1__img"
          />
        </div>

        {/* scene 5 */}

        <div className="scenes-1">
          <img
            src="https://i.pinimg.com/originals/cf/68/e7/cf68e77e742da2c905c6151e13a81ecc.jpg"
            alt=""
            className="scenes-1__img"
          />
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
        </div>

        {/* scene 6 */}
        <div className="scenes-1">
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
          <img
            src="https://i.pinimg.com/originals/d4/60/3d/d4603da7bf1e1fd5b4be165811e3189b.jpg"
            alt=""
            className="scenes-1__img"
          />
        </div>
        {/* scene 7 */}
        <div className="scenes-1">
          <img
            src="https://i.pinimg.com/originals/e2/84/17/e28417b681ef1a8002de37c4b9a2e730.jpg"
            alt=""
            className="scenes-1__img"
          />
          <div className="scene-story">
            <p className="story-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              necessitatibus sequi! Quo officia quia maiores tempora? Quas
              molestias nemo aspernatur sequi esse, ullam molestiae blanditiis
              nobis, voluptatum, rem maiores ratione! Iure ipsam nihil
              consequuntur hic commodi deserunt deleniti libero numquam quia
              neque. Adipisci, id qui! Alias ipsum placeat consequuntur eveniet
              aperiam sapiente modi hic, architecto tenetur eaque fuga quia
              magni?
            </p>
          </div>
        </div>

        <div className="feather2">
          <FaFeatherAlt className="icon" />
        </div>
      </div>

      {/*  content footer section */}

      <div className="footer">
        <div className="footer-part1">
          <h2 className="heading-footer">wants more content on</h2>
          <h3 className="heading-3">Heer love story</h3>
          <h2 className="heading-follow">Follow Us on</h2>

          <div className="footer-icon">
            <FaTwitter className="follow-icons" />

            <FaInstagram className="follow-icons" />

            <FaFacebookF className="follow-icons" />
          </div>
        </div>

        {/* footer part 2 */}

        <div className="footer-part2">
          <p className="footer-description">By entering the email adderess</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            ipsa odio eveniet eaque assumenda at error cumque, quidem vero ab
            perferendis autem ad dicta fuga commodi aperiam consequatur? Cumque,
            eaque! Veritatis, vel. Labore eius eum repellendus quibusdam
            necessitatibus voluptatibus, consectetur esse consequuntur nostrum
            itaque laudantium ab quidem quod voluptate cupiditate, cumque
            officiis, praesentium ex similique maiores quam vel? Velit, rerum!
            Corporis quis fugit officia maiores, explicabo modi, porro id hic ad
            dolorem atque nostrum commodi nisi impedit, numquam minima ipsa sunt
            similique? Debitis mollitia voluptates voluptatibus consectetur
            necessitatibus repellat aspernatur!
          </p>
        </div>

        <div className="contact">
          <p className="contact-para">Contact Us</p>
          <span> |</span>
          <p className="contact-para">Term of Services</p>
          <span> |</span>
          <p className="contact-para">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Coverpage;
