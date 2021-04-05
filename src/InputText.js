import * as React from 'react';
import {Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

function InputText(props) {
  const {forwardedRef, name} = props;

  const onChange = (name, event) => {
    event.preventDefault();
    if (forwardedRef?.current) {
      forwardedRef.current[name] = event.target.value;
    }
  };

  if (name === 'password')
    return <Input.Password
        allowClear={true}
        className={'inputValue'}
        placeholder="input password"
        onChange={event => onChange(name, event)}
        iconRender={visible => (
            visible ?
                <EyeTwoTone/> :
                <EyeInvisibleOutlined/>
        )}
    />;
  return (
      <Input
          allowClear={true}
          className={'inputValue'}
          onChange={event => onChange(name, event)}
          placeholder={`input ${name}`}
      />
  );
}

export default React.forwardRef(
    (props, ref) => <InputText{...props} forwardedRef={ref}/>);
