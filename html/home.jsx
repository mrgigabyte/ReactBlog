
class ShowPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item active">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">List group item heading</h4>
          <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </a>
      </div>
    )
  }
}

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', subject: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.AddPost = this.AddPost.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  AddPost() {
    axios.post('/addPost', {
      title: this.state.title,
      subject: this.state.subject
    }).then(function (response) {
      console.log(response);
      hashHistory.push('/')
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="col-md-5">
        <div className="form-area">
          <form role="form">
            <br styles="clear:both" />
            <div className="form-group">
              <input type="text" className="form-control" onChange={this.handleTitleChange} id="title" name="title" placeholder="Title" required />
            </div>

            <div className="form-group">
              <textarea className="form-control" type="textarea" onChange={this.handleSubjectChange} id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
            </div>

            <button type="button" id="submit" name="submit"  onClick={this.AddPost} className="btn btn-primary pull-right">Add Post</button>
          </form>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  < ShowPost />,
  document.getElementById('app'));




