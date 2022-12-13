import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>L'eau bout.</p>;
  }
  return <p>L'eau ne bout pas.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(event) {
    this.setState({temperature: event.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Saisissez la température en Celsius :</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    );
  }
}

export {Calculator};
