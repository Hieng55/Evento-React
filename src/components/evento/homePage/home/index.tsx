import { Footer } from '../../pages/footer';
import { NavBar } from '../../pages/header/navBar';
import { Banner } from '../homeMain/banner';
import { CountEvent } from '../homeMain/counterEvent';
import { EventCalendar } from '../homeMain/eventCalendar';
import { GetTickets } from '../homeMain/getTickets';
import { HomeAbout } from '../homeMain/homeAbout';
import { ListInfo } from '../homeMain/listInfo';
import { ListPersonLeader } from '../homeMain/listPersonLeader';
import { OurPartners } from '../homeMain/ourPartners';
import { PricingTable } from '../homeMain/pricingTable';

export const Home = () => {
  return (
    <>
      <div className="header flex justify-center fixed w-full z-20">
        <NavBar />
      </div>
      <div className="main">
        <Banner />
        <ListInfo />
        <CountEvent />
        <HomeAbout />
        <ListPersonLeader />
        <PricingTable />
        <EventCalendar />
        <OurPartners />
        <GetTickets />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
