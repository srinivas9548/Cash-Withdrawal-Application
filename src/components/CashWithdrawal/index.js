import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-card-container">
          <div className="cash-withdrawal-container">
            <div className="accounter-details">
              <p className="logo">{initial}</p>
              <p className="account-name">{name}</p>
            </div>
            <div className="balance-details">
              <p className="your-balance-text">Your Balance</p>
              <div className="balance-container">
                <p className="balance">{balance}</p>
                <p className="currency">In Rupees</p>
              </div>
            </div>
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-items-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
