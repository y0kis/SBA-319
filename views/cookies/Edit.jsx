//cookies/Edit.jsx
const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/cookies/${this.props.cookie._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.cookie.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.cookie.color}/><br/>
          Quantity: <input type="text" name="quantity"  defaultValue={this.props.cookie.quantity}/><br/>
          Is Ready To Eat:
              { this.props.cookie.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;