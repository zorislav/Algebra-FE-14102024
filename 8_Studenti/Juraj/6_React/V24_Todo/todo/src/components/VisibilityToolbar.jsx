import PropTypes from 'prop-types';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { VISIBILITY_TYPES } from "../const";

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? 'dark' : 'outline-dark';
}

function VisibilityToolbar({visibilityType, onVisibilityChange}) {

  function handle(value) {
    onVisibilityChange(value);
  }

  return (
    <>
    {/* <ToggleButtonGroup type="checkbox" name="visibility" className="mt-3" value={COMPLETED} defaultValue={COMPLETED}>
      <ToggleButton value={ALL} size="sm" variant={getButtonVariant(visibilityType, ALL)} onClick={() => handle('ALL')}>ALL</ToggleButton>
      <ToggleButton value={ACTIVE} size="sm" variant={getButtonVariant(visibilityType, ACTIVE)} onClick={() => handle('ACTIVE')}>ACTIVE</ToggleButton>
      <ToggleButton value={COMPLETED} size="sm" variant={getButtonVariant(visibilityType, COMPLETED)} onClick={() => handle('ALL')}>COMPLETED</ToggleButton>
    </ToggleButtonGroup> */}

    <ButtonGroup className='mt-3'>
      <Button size="sm" onClick={() => handle(ALL)}>ALL</Button>
      <Button size="sm" onClick={() => handle(ACTIVE)}>ACTIVE</Button>
      <Button size="sm" onClick={() => handle(COMPLETED)}>COMPLETED</Button>
    </ButtonGroup>
    </>
  );
}

export default VisibilityToolbar;

VisibilityToolbar.propTypes = {
  onVisibilityChange: PropTypes.func,
  visibilityType: PropTypes.string
};