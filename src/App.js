import * as React from 'react';

import './App.css';
import InputText from './InputText';
import {Button} from 'antd';

function App() {
  const ref = React.useRef({});
  const [text, setText] = React.useState(null);

  return (
      <div className="App">
        useRef example
        <div className={'inputTable'}>
          <InputText
              ref={ref}
              name={'name'}
          />
          <InputText
              ref={ref}
              name={'email'}
          />
          <InputText
              ref={ref}
              name={'password'}
          />
        </div>

        <Button className={'primary'} type={'primary'}
                onClick={() => setText({...ref.current})}>Submit</Button>

        <div className={'textExample'}>
          Name: {text?.name || ''} <br/>
          Email: {text?.email || ''} <br/>
          Password: {text?.password || ''} <br/>
        </div>

      </div>
  );
}

export default App;
