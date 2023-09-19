


function Pizza({pizzaObj}) {
    // console.log(props);

    return <li className='pizza'>

        <img src={pizzaObj.photoName} alt='image' />

        <div>
            <h3>{pizzaObj.name} </h3>
            <p>
                {pizzaObj.ingredients}
            </p>
            <span>{pizzaObj.price}</span>
        </div>

    </li>
}

export default Pizza;
