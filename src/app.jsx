import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };

    this.updateAmountDue = this.updateAmountDue.bind(this);
    this.updateAmountReceived = this.updateAmountReceived.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  updateAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
  }

  updateAmountReceived(e) {
    this.setState({
      amountReceived: e.target.value
    });
  }

  calculateChange(amountDue, amountReceived) {
    let changeDue = (amountReceived - amountDue).toFixed(2);
    let dollars = Math.trunc(changeDue);
    let twenties = Math.floor(dollars / 20);
    let tens = Math.floor((dollars % 20) / 10);
    let fives = Math.floor(((dollars % 20) % 10) / 5);
    let ones = Math.floor((dollars % 20) % 10) % 5;
    
    let centsConverted = Math.round(changeDue * 100);
    let cents = Number((centsConverted.toString().slice(-2)));
    let quarters = Math.floor(cents / 25);
    let dimes = Math.floor((cents % 25) / 10);
    let nickels = Math.floor(((cents % 25) % 10) / 5);
    let pennies = Math.floor(((cents) % 25) % 10) % 5;

    this.setState({
      changeDue: 'The total change due is $' + changeDue,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
    });
  }

  handleClick(e) {
    e.preventDefault();

    const amountDue = this.state.amountDue;
    const amountReceived = this.state.amountReceived;

    this.calculateChange(amountDue, amountReceived);
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1 className='text-white'>Change Calculator</h1>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <div className='form-group'>
                  <label for='amountDue'>How much is due?</label>
                  <input name='amountDue' onChange={this.updateAmountDue} value={this.state.amountDue} className='form-control input-md' />
                </div>
                <div className='form-group'>
                  <label for='amountReceived'>How much was received?</label>
                  <input name='amountReceived' onChange={this.updateAmountReceived} value={this.state.amountReceived} className='form-control input-md' />
                </div>
                <div className='panel-footer'>
                  <button name='button' onClick={this.handleClick} className='btn btn-primary form-control'>Calculate change</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 results-wrapper'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success'>
                  {this.state.changeDue}
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Twenties</h4>
                        <p name='output-twenties' className='lead text-center'>{this.state.twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Tens</h4>
                        <p name='output-tens' className='lead text-center'>{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Fives</h4>
                        <p name='output-fives' className='lead text-center'>{this.state.fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Ones</h4>
                        <p name='output-ones' className='lead text-center'>{this.state.ones}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Quarters</h4>
                        <p name='output-quarters' className='lead text-center'>{this.state.quarters}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Dimes</h4>
                        <p name='output-dimes' className='lead text-center'>{this.state.dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Nickels</h4>
                        <p name='output-nickels' className='lead text-center'>{this.state.nickels}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='panel panel-default'>
                      <div className='well panel-footer'>
                        <h4 className='text-center'>Pennies</h4>
                        <p name='output-pennies' className='lead text-center'>{this.state.pennies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
