import React from 'react'
import TokenDecoder from '../../utils/TokenDecoder';

function testToken() {
    const decodedToken = TokenDecoder();

    if (!decodedToken) {
      return <div>TokenVide</div>;
    }
  
  return (
    <div>
        <h2>INFORMATIONS TOKEN</h2>
        <pre>{decodedToken.sub}</pre>
    </div>
  )
}

export default testToken