import {PageTitle} from './Pagetitle/PageTitle'
import {EventBoard} from './EventBoard/EventBoard'
import upcomingEvents from './EventBoard/upcoming-events.json'


const App = () => {
  return (
    <>
    <PageTitle text="25th Core Worlds Coalition Conference"/>
    <EventBoard events={upcomingEvents}/>
    </>
  )
};

export default App