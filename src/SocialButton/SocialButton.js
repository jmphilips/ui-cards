import React from 'react';
import './SocialButton.css';
import { Button, Icon } from 'antd';

const SocialButton = () => {
  return (
    <div className="SocialButton">
      <Button>
        <Icon type="mail" />
      </Button>
    </div>
  );
};

export default SocialButton;
