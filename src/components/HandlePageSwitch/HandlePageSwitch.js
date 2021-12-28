import PropTypes from 'prop-types';
import Button from '../Button';
import { PREV, NEXT } from '../../helpers/constants';
export default function HandlePageSwitch({ onClick, page, totalPages }) {
  return (
    <div className="ButtonWrapper">
      <Button
        type="button"
        name={PREV}
        onClick={onClick}
        className="Button"
        content="Previous"
        disabled={!(page > 1)}
      />
      <Button
        type="button"
        name={NEXT}
        onClick={onClick}
        className="Button"
        content="Next"
        disabled={!(page !== totalPages)}
      />
    </div>
  );
}
HandlePageSwitch.propTypes = {
  onClick: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};
