import { Component } from "react";

export class ClassLikeButton extends Component {
  state = { clicks: 0 };

  render() {
    return (
      <button
        type="button"
        onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
      >
        Clicked: {this.state.clicks}
      </button>
    );
  }
}
