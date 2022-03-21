import React from "react";

function IndianFood() {
  return (
  <div className="indfood">
    <div class="row">
  <div class="col-4 ">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Grilled Indian Chicken</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Cholay</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Indian Butter Chicken</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Aloo Gobi Masala</a>
     
    </div>
  </div>
  <div class="col-sm-3">
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        <div className="ind">
          <h4 id="list-item-1">Grilled Indian Chicken</h4>
          
            <div className="img">
              <img src="images\grilled-chicken.png" alt="grilled chiken" />
            </div>
           
            <div className="ingridiants">
              <h5>Ingridiants</h5>
                <ul>
                  <li>1 teaspoon ground ginger</li>
                  <li>2 tablespoons crushed garlic </li>
                  <li>2 teaspoons ground turmeric </li>
                  <li>¼ cup yogurt</li>
                  <li>1 (3 pound) whole chicken, cut into pieces</li>
                </ul>
            </div>
           
            <div className="steps">
              <h5>Steps</h5>
              <ul>
                <li>In a large bowl, combine ginger, garlic, turmeric, salt, and yogurt.</li>
                <li>Marinate the chicken pieces in the mixture for 3 hours.</li>
                <li>Preheat an outdoor grill for medium-high heat and lightly oil grate. Grill chicken until juices run clear.</li>
              </ul>
            </div>
           
          </div>
        </div>
        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
        <div className="ind">
          <h4 id="list-item-2">Cholay</h4>
            <div className="img">
              <img src="images\choley.png" alt="choley" />
            </div>
            
            <div className="ingridiants">
              <h5 id="list-item-2">Ingridiants</h5>
                <ul>
                  <li>2 cups water</li>
                  <li>1 tea bag </li>
                  <li>1 bay leaf </li>
                  <li>2 (15.5 ounce) cans garbanzo beans, drained</li>
                  <li>2 tablespoons vegetable oil, divided</li>
                  <li>1 onion, sliced</li>
                  <li>3 tomatoes, chopped</li>
                  <li>¼ cup fresh cilantro leaves</li>
                  <li>1 teaspoon ground coriander</li>
                  <li>1 teaspoon cumin seeds</li>
                  <li>1 teaspoon grated fresh ginger root</li>
                  <li>1 teaspoon grated garlic</li>
                  <li>1 teaspoon ground turmeric (Optional)</li>
                  <li>1 onion, finely chopped</li>
                  <li>ground cayenne pepper to taste</li>
                  <li>1 pinch garam masala (Optional)</li>
                </ul>
            </div>
            
            <div className="steps">
              <h5>Steps</h5>
              <ul>
                <li>Place the 2 cups water, tea bag, and bay leaf into a pot, and bring water to a boil. Reserving about 1/2 cup garbanzo beans, stir the beans into the boiling water. When beans are heated through, discard the tea bag and bay leaf. Remove from heat. Drain the beans, reserving water, and set aside.</li>
                <li>Heat 2 teaspoons oil in a skillet over medium heat, and saute the sliced onion until tender. Remove from heat, cool, and mix in the reserved garbanzo beans, 1 tomato, and 1/2 the cilantro leaves. Set aside.</li>
                <li>Heat the remaining oil in a skillet over medium heat. Blend in the coriander, cumin seeds, ginger, and garlic. Cook and stir for 15 to 20 seconds, until lightly browned. Mix in the turmeric. Stir the chopped onion into the skillet, and cook until tender. Mix in the remaining tomatoes. Season with salt, cayenne pepper, and garam masala. Bring the tomato liquid to a boil, and cook about 5 minutes. Stir in the boiled garbanzo beans, sliced onion mixture, and enough of the reserved water to attain a thick, gravy-like consistency. Continue to cook and stir 5 minutes. Garnish with the remaining cilantro leaves to serve.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
        <div className="ind">
          <h4 id="list-item-3">Indian Butter Chicken</h4>
            <div className="img">
              <img src="images\chiken makhani.png" alt="chiken makhani" />
            </div>
            
            <div className="ingridiants">
            <h5>Ingridiants</h5>
                <ul>
                  <li>2 teaspoons garam masala</li>
                  <li>2 teaspoons tandoori masala powder</li>
                  <li>2 teaspoons Madras curry powder</li>
                  <li>1 teaspoon ground cumin</li>
                  <li>½ teaspoon ground cardamom</li>
                  <li>½ teaspoon ground cayenne pepper</li>
                  <li>salt and ground black pepper to taste</li>
                  <li>1 ½ pounds boneless, skinless chicken thighs, cut into bite-size pieces</li>
                  <li>1 cup tomato puree</li>
                  <li>1 cup half-and-half</li>
                  <li>¼ cup plain yogurt</li>
                  <li>⅓ cup cashews</li>
                  <li>1 bunch fresh cilantro, stems removed</li>
                </ul>
            </div>
     
            <div className="steps">
            <h5>Steps</h5>
              <ul>
                <li>Mix garam masala, tandoori masala, curry, cumin, cardamom, cayenne, salt, and black pepper together in a small bowl to make spice mixture.</li>
                <li>Place chicken in a large bowl and add 1/2 the spice mixture; turn to coat evenly.</li>
                <li>Melt 1 tablespoon butter in a large skillet over medium heat. Add chicken; cook and stir until lightly browned, about 10 minutes. Remove from heat.</li>
                <li>Melt remaining 2 tablespoons butter in a large saucepan over medium heat. Add onion; cook and stir until soft and translucent, about 5 minutes. Stir in remainder of the spice mixture, lemon juice, garlic, and ginger; cook and stir until combined, about 1 minute.</li>
                <li>Stir tomato puree into onion mixture and cook, stirring frequently, about 2 minutes. Pour in half-and-half and yogurt. Reduce heat to low and simmer sauce, stirring frequently, about 10 minutes. Remove from heat.</li>
                <li>Blend cashews in a blender until finely ground. Add sauce to the blender; puree until smooth.</li>
                <li>Pour blended sauce over chicken in the skillet. Simmer until thickened, 10 to 15 minutes. Garnish with cilantro.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
        <div className="ind">
          <h4 id="list-item-4">Aloo Gobi Masala</h4>
            <div className="img">
              <img src="images\aalu gobi.png" alt="aalu gobi" />
            </div>
          
            <div className="ingridiants">
            <h5>Ingridiants</h5>
                <ul>
                  <li>1 head cauliflower, cut into 1-inch florets</li>
                  <li>3 potatoes, peeled and cut into 1-inch chunks</li>
                  <li>1 tablespoon olive oil</li>
                  <li>1 teaspoon cumin seeds</li>
                  <li>2 tomatoes, diced</li>
                  <li>1 onion, chopped</li>
                  <li>1 teaspoon salt</li>
                  <li>1 teaspoon curry powder</li>
                </ul>
            </div>
            
            <div className="steps">
            <h5>Steps</h5>
              <ul>
               <li>Place the cauliflower in a large, microwave-safe dish; cook in microwave on High for 3 minutes. Transfer the cauliflower to a bowl and set aside. Put the potatoes in the dish and cook in the microwave on High for 4 minutes. Pour into the bowl with the cauliflower.</li>
               <li>Heat the olive oil and cumin seeds in a large skillet over medium-high heat until the cumin swells and turns golden brown; stir the onions into the oil and cook about 3 minutes. Add the tomatoes and cook and stir another 3 minutes. Fold the cauliflower and potatoes into the mixture. Season with the curry powder and salt. Continue cooking until completely hot, 3 to 5 minutes. Serve hot.</li>
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

export default IndianFood;
