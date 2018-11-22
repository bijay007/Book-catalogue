import React from 'react';
import { css } from 'emotion';

const noItem = css({
  padding: '5px',
});
const DisplayNoBookEmoji = () => (
  <tr>
    <td>
      <div className={noItem}>
        <span role="img" aria-label="sad-face">😔</span>
      </div>
    </td>
  </tr>
);

export default DisplayNoBookEmoji;
