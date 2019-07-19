import React from 'react';
import DisplayBox from '../displayBox/DisplayBox';
import RandomButton from '../randombutton/RandomButton';
import CategoryContainer from '../categorycontainer/CategoryContainer';
import './RestaurantBox.style.css';

class RestaurantBox extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurants: [
                {
                    name: "La cura",
                    img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/comer-mariscos-meses-que-no-llevan-r2-670x447.jpg',
                    description: '',
                    category: 'Seafood',
                },
                {
                    name: "Taco real",
                    img: 'https://www.thecuriouschickpea.com/wp-content/uploads/2018/05/carneasadatacos-2-720x540.jpg',
                    description: 'Because why not',
                    category: 'Taco',
                },
                {
                    name: "Holy Cow",
                    img: 'https://www.holycow.mx/assets/img/logo.png',
                    description: '',
                    category: 'Burger',
                },
                {
                    name: "Brujula pizza",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKW4dZmARwn3T_IJUNuZYsw_lnsxRWWSAlqZm3yde-d2Vd8k4z',
                    description: '',
                    category: 'Pizza',
                },
                {
                    name: "Alfreditos",
                    img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/comer-mariscos-meses-que-no-llevan-r2-670x447.jpg',
                    description: '',
                    category: 'Seafood',
                },
                {
                    name: "3&3 grill",
                    img: 'https://scontent.ftij2-1.fna.fbcdn.net/v/t1.0-9/17884411_795020130647934_6451018770341471862_n.png?_nc_cat=109&amp;_nc_oc=AQkAOlkUT6UnlBTTCEIfSnJssJSqe7w1aBsVFjsafLKEuRNiKYKplIe4ETuvKbq_-i4&amp;_nc_ht=scontent.ftij2-1.fna&amp;oh=96dca9cef4bdf1158ce378649c18ef1e&amp;oe=5DA52C4F',
                    description: 'whenever we are tired of holy cow',
                    category: 'Burger',
                },
                {
                    name: "CarlsJr",
                    img: 'https://seeklogo.net/wp-content/uploads/2017/04/carls-jr-logo-01.png',
                    description: 'Close as fuck and tasty',
                    category: 'Burger',
                },
            ],
            winnerRestaurant: '',
            category: false,
            selectedCat: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.onHandleCats = this.onHandleCats.bind(this);
        this.getRandomNum = this.getRandomNum.bind(this);
    }

    getRandomNum(){
        let filteredRestaurants = this.state.restaurants;
        if(this.state.category && this.state.selectedCat){
            //filterarray
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.category === this.state.selectedCat)
        }
        //get random number
        let randomNum = Math.floor(Math.random() * (filteredRestaurants.length));
        //pick restaurant
        let winnerRest = filteredRestaurants[randomNum];
        //logic for repeated scnearios todo
        return winnerRest;
    }

    handleClick(){
        //execute random generator and choose a restaurant
        let newWinner = this.getRandomNum();
        //update state and send winner to disp laybox
        this.setState({winnerRestaurant: newWinner});
    }
    handleCategoryClick(){
        //set state to choose category true
        this.setState({category: true});
    }

    onHandleCats(e){
        //set state to choose category true
        this.setState({selectedCat: e.target.value});
    }

    render(){
        const {restaurants} = this.state;
        const categories = restaurants.map(restaurant => restaurant.category);
        let filteredCategories = [];

        for(let category of categories){
            if(!filteredCategories.includes(category)) filteredCategories.push(category);
        }

        return(
            <div className="RestaurantBox-container">
                {
                    this.state.category ? 
                    <CategoryContainer filteredCategories={filteredCategories} onHandleCats={this.onHandleCats}/> 
                    : 
                    (
                        <div>
                            <button onClick={this.handleCategoryClick}>Use Categories</button>
                        </div>
                    )
                }
                
                <RandomButton handleClick={this.handleClick}/>
                
                {
                    this.state.winnerRestaurant ? <DisplayBox winner={this.state.winnerRestaurant} /> : null
                }
            </div>
        )
    }
}

export default RestaurantBox;