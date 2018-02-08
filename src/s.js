
import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'





const source = [
  {
    "title": "Steal Deal Inc",
    "description": "Wholesale Clothing Distributor, offers Men's Hip Hop, Urban Wear, and Streetwear Apparel for Cheap",
    "image": "https://igx.4sqi.net/img/general/350x200/43569411_wIjDZ9kX3ogz68AM_i5ouCTRcZD4wZ5YiMXi2ovVdDQ.jpg",
    "	Address" : "5716 Alba St",
    "City" : "Los Angeles",
    "State" :"California",
    "Zip" :	90058,
    "Phone":"	3235818051"
  }, {
    "title": "Eurostar Inc",
    "description": "doing business as Warehouse Shoe Sale, operates as a family footwear retailer",
    "image": "https://www.shopwss.com/images/wss-logo.svg",
    "	Address" : "15141 S Figueroa St",
    "City" :	"Gardena",
    "State" :"California",
    "Zip" :90248,
    "Phone":"(310) 719-9731"
  }, {
    "title": "Parts Unknown",
    "description": "Parts Unknown - A Fashion Adventure",
    "image": "http://www.partsunknown.com/mas_assets/images/partsunknown_logo.png",
    "	Address" : "146 E Main St",
    "City" :"Fredericksburg",
    "State" :"Texas",
    "Zip" :78624,
    "Phone":"(830) 997-2055"
  }, {
    "title": "Payless ShoeSource",
    "description": "Profit-focused intangible policy",
    "image": "It's an American discount footwear retailer headquartered in Topeka, Kansas. ",
    "	Address" : "110 W 34th St",
    "City" :"New York",
    "State" :"New York",
    "Zip" :10001,
    "Phone":"(212) 947-0306"
  }, {
    "title": "Expressions",
    "description": "Incorporated rose from its mother company Sterling Papers Group of Companies. ",
    "image": "https://expressionsstores.com/wp-content/uploads/2017/04/Expressions2.jpg",
    "	Address": "214 E Main St",
    "City":"Aledo",
      "State":"Illinois",
        "Zip":61231,
        	"Phone":	"(309) 582-5755"
  }
]
export default class T11 extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <Header>Options</Header>
          <pre>{JSON.stringify(source, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}