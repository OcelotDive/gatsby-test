import React, { Component } from "react"
import SomethingWentWrong from "../SomethingWentWrong/somethingWentWrong"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ? <SomethingWentWrong /> : this.props.children
  }
}

export default ErrorBoundary
