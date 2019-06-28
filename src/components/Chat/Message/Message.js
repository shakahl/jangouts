/**
 * Copyright (c) [2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React, { useEffect } from 'react';

import EmbedJS from 'embed-js';
import basic from 'embed-preset-basic';

import './Message.css';


function Message(props) {
  const messageWrapper = React.createRef();

  useEffect(() => {
    const embed = new EmbedJS({
      input: messageWrapper.current,
      preset: basic({
        exclude: ['youtube', 'highlight']
      })
    });

    embed.render();
  });

  return (
    <div className="Message" ref={messageWrapper}>
      {props.children}
    </div>
  );
}

export default Message;
