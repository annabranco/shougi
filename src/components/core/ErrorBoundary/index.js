import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  ErrorArea,
  ErrorTitle,
  ErrorMessageWrapper,
  ErrorMessage,
  Link,
  ErrorButton,
  GithubIcon
} from './styles';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: undefined
  };

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Something unexpected had happened', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorArea>
          <ErrorTitle>That is embarassing...</ErrorTitle>
          <ErrorMessageWrapper>
            <ErrorMessage>
              I am awfully sorry but something unexpected had happened. :(
            </ErrorMessage>
            <ErrorMessage>
              I would really appreciate if you could notify me of this error on
              my issues page.
            </ErrorMessage>
            <Link
              href="https://github.com/annabranco/shougi/issues/new"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <ErrorButton>Notify me</ErrorButton>
              <GithubIcon className="fab fa-github-alt" />
            </Link>
          </ErrorMessageWrapper>
        </ErrorArea>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
