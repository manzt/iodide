/* global IODIDE_VERSION */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '@material-ui/core/Modal'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Close from '@material-ui/icons/Close'

import KeyboardShortcutList from './keyboard-shortcut-list'

import { toggleHelpModal } from '../../actions/actions'
import tasks from '../../actions/task-definitions'

function AboutIodide() {
  return (
    <div className="help-modal-contents">
      <p>
      Iodide version: {IODIDE_VERSION}
      </p>
      <h2>Visit Iodide{"'"}s <a href="http://github.com/iodide-project/iodide" target="_blank" rel="noopener noreferrer">repo on Github</a>
      </h2>
      <p><a href="http://github.com/iodide-project/iodide/issues/new" target="_blank" rel="noopener noreferrer">File a bug or feature request</a>.
      </p>
    </div>
  );
}

function MoreResources() {
  return (<div className="help-modal-contents">Coming soon...</div>);
}

export class HelpModalUnconnected extends React.Component {
  static propTypes = {
    helpModalOpen: PropTypes.bool,
    tasks: PropTypes.object,
  }

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render() {
    // const { classes } = this.props
    const { value } = this.state
    return (
      <Modal
        open={this.props.helpModalOpen}
        onEscapeKeyDown={this.props.toggleHelpModal}
        onBackdropClick={this.props.toggleHelpModal}
      >
        <div
          className="help-modal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '80%',
            width: '60%',
            background: 'white',
            boxShadow: '0px 3px 10px 3px rgba(0, 0, 0, 0.7)',
            flexDirection: 'column',
            display: 'flex',
          }}
        >
          <AppBar
            position="static"
            style={{
              background: '#5d5d5d',
            }}
          >
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Keyboard shortcuts" />
              <Tab label="More resources" />
              <Tab label="About Iodide" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {value === 0 && <KeyboardShortcutList tasks={tasks} />}
          {value === 1 && <MoreResources />}
          {value === 2 && <AboutIodide />}
        </div>
      </Modal>
    )
  }
}

export function mapStateToProps(state) {
  return {
    helpModalOpen: state.helpModalOpen,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    toggleHelpModal: () => dispatch(toggleHelpModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpModalUnconnected)
