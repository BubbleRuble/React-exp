import { FaMapMarkerAlt,FaUserAlt,FaCalendarAlt,FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { formatEventDuration, formatEventStart } from 'utils';
import {iconSize} from 'constants'
import {Card, EventTitle, Info, Chip} from './Event.styled'

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const formattedDuration = formatEventDuration(start,end);

  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm}/>
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm}/>
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm}/>
        {formattedDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
