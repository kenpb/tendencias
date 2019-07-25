import { h, Component } from 'preact'

import * as d3 from 'd3'
import './visualization.scss'

export class Visualization extends Component<any, {}> {
  ref: SVGSVGElement

  componentDidMount() {
    d3.select(this.ref)
    .append("circle")
    .attr("r", 5)
    .attr("cx", this.props.width / 2)
    .attr("cy", this.props.height / 2)
    .attr("fill", "red")
  }

  render() {
    return (
      <svg ref={(ref: SVGSVGElement) => this.ref = ref}
        width={this.props.width} height={this.props.height}>
      </svg>
    )
  }

}
