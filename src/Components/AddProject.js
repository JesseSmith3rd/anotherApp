import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    if(this.refs.title.value === ''){
      alert('You have to enter a title');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <strong><label>Title</label></strong><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <strong><label>Category</label></strong><br />
            <select ref="category">
            {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// AddProject.propTypes = {
//   categories: React.PropTypes.array,
//   addProject: React.PropTypes.func
// }
export default AddProject;
