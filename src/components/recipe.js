import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card,ListGroup,ListGroupItem,Figure } from 'react-bootstrap';
import { LovedRec,ADDING } from '../action/rec_action';
 class Recipe extends Component {
    state={
      loveclicked:false
    }

    renderRecipe(){
       
        const {recipe}= this.props;
       
       
        let ingredients;
        
        
        if (!this.props.recipe || !this.props.recipe.ingredients || this.props.recipe.ingredients.length === 0) {
            return null;
        }
        
        else{
         
                ingredients = recipe.ingredients.map((ingredient,index) => {
                return <ListGroupItem key={ingredient}> <i className="fas fa-flask Li_Icon"></i>{'  '}{ingredient}

                </ListGroupItem>     
                })
         
        }
    
        const recipeId = recipe.recipe_id;
        const recipeImage = recipe.image_url;
        
        return (
            <React.Fragment>
              <Card>
                <span className="img-fig">
                <Card.Img alt={recipeId} src={recipeImage}/>
                </span>
                <Card.ImgOverlay>
                  <Card.Title> <span>
                  { recipe.title.length < 10 ? `${recipe.title}` : `${recipe.title.substring(0, 15)}...` }
                  </span>     </Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                  <div className="heartcontaienr">
                  <h2 onClick={()=>this.props.ADDING(ingredients)} className="addtoshoppingtag">ADD TO SHOPPING LIST</h2>
                  {this.state.loveclicked?(
                    <i onClick={()=>{this.setState({
                      loveclicked: !this.state.loveclicked})
                  }}  class="fas fa-heart"></i>
                  ):(
                    <i onClick={()=>{this.setState({
                      loveclicked: !this.state.loveclicked})
                  this.props.LovedRec(this.props.recipe) }} class="far fa-heart"></i>
                  )}
                  
                  </div>
                  <ListGroup >
                    
                    {ingredients}

                  </ListGroup>

                </Card.Body>
              </Card>
          
            </React.Fragment>

        )

    
}
  render() {
    
    return (
      <div >
          {this.renderRecipe()}
          
        
      </div>
    )
  }
}

const mapStateToProps= state => ({
    recipe: state.recipe.recipe
})

export default connect (mapStateToProps,{LovedRec,ADDING})(Recipe);