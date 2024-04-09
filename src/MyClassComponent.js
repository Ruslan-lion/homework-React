import { Component } from 'react'

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Вітаю! Це мій класовий компонент для виконання домашнього завдання.'
    };
  }

  render() {
    return (
      <div className="my-class">
        {this.state.message}
      </div>
    );
  }
}

export default MyClassComponent;