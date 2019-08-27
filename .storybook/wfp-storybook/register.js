import React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

import '!style-loader!css-loader!sass-loader!./_wfp-storybook.scss';

import Button from '../../src/components/Button';
import Story from '../../src/components/Story';

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
    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      this.onAddNotes('');
    });
  }

  render() {
    const { text } = this.state;
    const { active } = this.props;
    /*const textAfterFormatted = text ? text.trim().replace(/\n/g, '<br />') : '';
     */

    const usablilla = `<!-- begin usabilla live embed code -->
     <script type="text/javascript">/*{literal}<![CDATA[*/window.lightningjs||function(c){function g(b,d){d&&(d+=(/\?/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(/^\/\//,(g=="https:"?g:"http:")+"//"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head></head><",c,' onload="var d=',n,";d.getElementsByTagName('head')[0].",d,"(d.",g,"('script')).",i,"='",a.l,"'\"></",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement",i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;/MSIE[ ]+6/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain='"+h.domain+"';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t){f[i]=p+'d.write("'+b().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};a.l&&setTimeout(q,0)})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({});
     window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/47554182d0dc.js");
     /*]]>{/literal}*/</script>
     <!-- end usabilla live embed code -->`;
    if (!active) {
      return null;
    }
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <Story>
          <p style={{ marginBottom: '2rem' }}>
            Your feedback is highly appreciated! Please use the buttons below to
            provide feedback.
          </p>
          <Button kind="secondary" href="https://github.com/wfp/ui/issues/">
            Create Issue on GitHub
          </Button>{' '}
          <Button kind="secondary" href="slack://channel?team=wfp&id=ux-ui">
            UX-UI Slack channel
          </Button>{' '}
          <Button kind="secondary" href="mailto:robert.guehne@wfp.org">
            Send email
          </Button>
        </Story>
      </div>
    );
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
      <Notes
        key={api}
        channel={addons.getChannel()}
        api={api}
        active={active}
      />
    ),
  });
  console.log('addons', addons.elements);

  addons.elements.panel['storybookjs/knobs/panel'].title = 'Properties';
  addons.elements.panel['storybook/actions/panel'].title = 'Events';
  addons.elements.panel['storybook/storysource/panel'].title = 'Source';
});
