import React from "react";

function CHINESE() {
  return (
    <div className="indfood">
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
            >
              Chicken Fried Rice
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
            >
              Chow mein
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
            >
              Veg Manchurian
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
            >
              Chilli Chicken
            </a>
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div className="ind">
                <h4 id="list-item-1">Chicken Fried Rice</h4>

                <div className="img">
                  <img src="images\chicken-fried-rice.png" alt="grilled chiken" />
                </div>
                 <div className="ingridiants">
                <h5>Ingridiants</h5>
                  <ul>
                    <li>2 tbsp. extra-virgin olive oil</li>
                    <li>3 chicken breasts (about 1 1/2 lb.)</li>
                    <li>Kosher salt</li>
                    <li>Freshly ground black pepper</li>
                    <li>2 tbsp. sesame oil, divided</li>
                    <li>1 medium onion, chopped</li>
                    <li>2 carrots, peeled and diced</li>
                    <li>3 cloves garlic, minced</li>
                    <li>1 tbsp. freshly minced ginger</li>
                    <li>4 c. cooked white rice (preferably leftover)</li>
                    <li>3/4 c. frozen peas</li>
                  </ul>
                </div>
             
                <div className="steps">
                <h5>Steps</h5>
                  <ul>
                    <li>
                      In a medium skillet over medium heat, heat olive oil.
                      Season chicken with salt and pepper on both sides, then
                      add to skillet, and cook until golden and no longer pink,
                      8 minutes per side. Remove from skillet and let rest 5
                      minutes, then cut into bite-sized pieces.
                    </li>
                    <li>
                      To the same skillet, heat 1 tablespoon sesame oil. Add
                      onion and carrots and cook until soft, 5 minutes, Add
                      garlic and ginger and cook until fragrant, 1 minute more.
                      Stir in rice and peas and cook until warmed through, 2
                      minutes.
                    </li>
                    <li>
                      Push rice to one side of skillet and add remaining
                      tablespoon sesame oil to other side. Add egg and stir
                      until almost fully cooked, then fold eggs into rice. Add
                      chicken back to skillet with soy sauce and green onions
                      and stir to combine.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <div className="ind">
                <h4 id="list-item-1">Chow mein</h4>
                <div className="img">
                  <img src="images\chow mein.png" alt="choley" />
                </div>
              
                <div className="ingridiants">
                <h5>Ingridiants</h5>
                  <ul>
                    <li>1/2 pound fresh egg noodles, or 3 ounces dried</li>
                    <li>1 tablespoon light soy sauce</li>
                    <li>2 tablespoons rice vinegar</li>
                    <li>1 tablespoon toasted sesame oil</li>
                    <li>1 teaspoon sugar</li>
                    <li>3 tablespoons water</li>
                    <li>1/2 cup thinly sliced yellow onion</li>
                    <li>1 cup thinly sliced red bell pepper</li>
                    <li>1 medium zucchini, cut into thin strips</li>
                    <li>1 tablespoon grated fresh ginger</li>
                  </ul>
                </div>
              
                <div className="steps">
                <h5>Steps</h5>
                  <ul>
                    <li>Gather the sauce ingredients.</li>
                    <li>
                      In a small bowl, combine the sauce ingredients. Mix well
                      and set aside.
                    </li>
                    <li>Gather the remaining ingredients.</li>
                    <li>
                      Bring a large pot of water to a boil and add 1 tablespoon
                      of salt. Add the noodles and boil for 2 minutes
                    </li>
                    <li>Drain the noodles and rinse well with cold water.</li>
                    <li>
                      Return the vegetables to the pan with the noodles, add the
                      sauce, and continue to toss the noodles until they are
                      well combined and heated through.
                    </li>
                    <li>
                      Transfer to a warmed platter. Serve immediately and enjoy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <div className="ind">
                <h4 id="list-item-3">Veg Manchurian</h4>
                <div className="img">
                  <img src="images\Veg-Manchurian-1.png" alt="chiken makhani" />
                </div>
            
                <div className="ingridiants">
                <h5>Ingridiants</h5>
                  <ul>
                    <li>½ cup grated carrot</li>
                    <li>½ cup finely chopped cabbage </li>
                    <li>▢¼ cup finely chopped green bell pepper (</li>
                    <li>¼ cup finely chopped spring onions </li>
                    <li>1 tablespoon cornflour</li>
                    <li>1 to 1.5 tablespoons oil</li>
                    <li>
                      4 tablespoons finely chopped onions or chopped spring
                      onion whites
                    </li>
                    <li>1 tablespoon finely chopped ginger</li>
                    <li>1 tablespoon finely chopped garlic</li>
                    <li>▢½ tablespoon soy sauce</li>
                  </ul>
                </div>
                
                <div className="steps">
                <h5>Steps</h5>
                  <ul>
                    <li>
                      Take the finely chopped or grated veggies in a bowl.{" "}
                    </li>
                    <li>
                      Then add the dry ingredients – corn starch, all-purpose
                      flour (maida), black pepper and salt. Mix and gather the
                      whole mixture together. Then kind of mix and knead so that
                      the veggies leave water and you get a dough-like mixture.
                      But do not knead like that a bread or roti dough. Gluten
                      strands can form that will give a dense chewy texture in
                      the fried veggie balls. So just mix very well and press so
                      that the veggies release their juices.{" "}
                    </li>
                    <li>
                      Heat oil for deep frying in a kadai or pan. Add a small
                      piece of a ball to the hot oil. If the balls does not
                      stick or settle down at the bottom of the pan, but comes
                      up steadily the oil is ready for frying these veg
                      manchurian balls. If the balls break, then some more
                      binding agent is required. So you can add 2 to 3 teaspoons
                      of some more all purpose flour (maida).
                    </li>
                    <li>
                      Gently place the balls in the hot oil. The oil has to be
                      medium hot. Too much heat and the manchurian balls will be
                      browned from top and uncooked from inside. Less hot oil
                      will make the balls absorb too much of oil.
                    </li>
                    <li>
                      In another small bowl take 1 tablespoon cornflour and 2
                      tablespoons water. Mix very well and keep aside.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              <div className="ind">
                <h4 id="list-item-4">Chilli Chicken</h4>
                <div className="img">
                  <img src="images\PngItem.png" alt="aalu gobi" />
                </div>
                
                <div className="ingridiants">
                <h5>Ingridiants</h5>
                  <ul>
                    <li>2 chicken breasts</li>
                    <li>1 teaspoon salt</li>
                    <li>½ teaspoon pepper</li>
                    <li>1 egg, beaten</li>
                    <li>¾ cup flour(100 g)</li>
                    <li>3 cloves garlic cloves, crushed</li>
                    <li>2 tablespoons tomato puree</li>
                    <li>3 tablespoons soy sauce</li>
                  </ul>
                </div>
              
                <div className="steps">
                <h5>Steps</h5>
                  <ul>
                    <li>
                      Season the chicken with salt and pepper. Cut the chicken
                      into thin strips then coat in the egg wash and flour.
                      Shallow fry for a few minutes on each side, until golden
                      brown.
                    </li>
                    <li>
                      Add the peppers and fry for another couple of minutes.
                      Remove the chicken and peppers and set aside. In the same
                      pan, add the garlic, red chilli, soy sauce, tomato purée,
                      and water. Stir and simmer the mixture reduces and is
                      thick and syrupy.
                    </li>
                    <li>
                      Add back in the chicken and peppers and stir well in the
                      sauce. Serve with rice. Enjoy!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prev">  
      <a class="btn bt btn-primary" href="http://localhost:3000/" role="button">Previous Page</a>
  

    </div>
    </div>
  );
}

export default CHINESE;
