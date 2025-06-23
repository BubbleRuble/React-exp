import {EventBoard} from '../EventBoard/EventBoard';
import upcomingEvents from '../EventBoard/upcoming-events.json';
import {PageTitle} from '../Pagetitle/PageTitle';
import {Container} from './App.styled';

const App = () => {
  return (
    <Container>
    <PageTitle text="25th Core Worlds Coalition Conference"/>
    <EventBoard events={upcomingEvents}/>
    </Container>
  )
};

export default App