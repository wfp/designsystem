import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import { addParameters, configure, addDecorator } from '@storybook/react';

const NotesPanel = styled.div({
  margin: 10,
  width: '100%',
  overflow: 'auto',
});

class Notes extends React.Component {
  state = {
    text: '',
  };

  onAddNotes = text => {
    //this.setState({ text });
  };

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('MYADDON/add_notes', this.onAddNotes);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddNotes('');
    });
  }

  render() {
    /*const { text } = this.state;
    const { active } = this.props;
    const textAfterFormatted = text ? text.trim().replace(/\n/g, '<br />') : '';
    */
    return (<div>Feedback</div>);

    return active ? (
      <NotesPanel dangerouslySetInnerHTML={{ __html: textAfterFormatted }} />
    ) : null;
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener('MYADDON/add_notes', this.onAddNotes);
  }
}

// Register the addon with a unique name.
addons.register('MYADDON', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('MYADDON/panel', {
    title: 'Feedback',
    render: ({ active }) => (
      <Notes channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
