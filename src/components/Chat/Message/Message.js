/**
 * Copyright (c) [2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';

import './Message.css';

function Message(props) {

  return (
    <div className="Message">
      {props.children}
    </div>
  );
}

export default Message;
