import * as React from 'react';
import Button from '../Button';
import { AppContext } from '../AppProvider/AppProvider';


interface RunButtonProps {
  onClick: () => void;
}

function RunTranslateButton({onClick}: RunButtonProps) {
  const { outputs } = React.useContext(AppContext);

  // hide run translate button if there are no outputs
  if (!outputs.length) {
    return null;
  }

  return (
    <Button
    onClick={onClick}
    >
      Run Translation
    </Button>
  );
}

export default RunTranslateButton;
