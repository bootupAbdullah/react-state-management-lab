const MyRoster = (props) => {
    return (
      <ul>
        {props.availableIngredients.map((ingredient, index) => (
          <div key={index}>
          <li value={ingredient} style={{backgroundColor:ingredient.color}}>{ingredient.name}</li>
          <button onClick={() => props.addToBurger(ingredient)} >+</button>
          </div>
        ))}
      </ul>
    );
  };