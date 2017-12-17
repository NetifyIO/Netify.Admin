import React from 'react';
import Header from './Header';

class Dashboard extends React.Component {

  componentDidMount() {
    console.log('dashboard component mounted');
  }

  render() {
    return (
      <div>
        <Header page="Dashboard" />
        <div className="content">
          <h2>Some Sample Content with Da Header</h2>
          <p>
            Bacon ipsum dolor amet meatloaf sausage tongue, pork loin cupim sirloin pork chop. Short ribs rump fatback porchetta pig strip steak beef sausage picanha pork loin. Frankfurter sirloin ball tip burgdoggen, leberkas prosciutto beef jowl t-bone short loin. Ground round meatball corned beef cupim, pancetta andouille tenderloin shankle porchetta short loin turducken shank beef ribs picanha burgdoggen. Kevin meatloaf hamburger bresaola pork.
          </p>

          <p>
            Jowl turducken rump tongue, boudin venison salami biltong spare ribs andouille pork chop turkey pork. Picanha cow ball tip pork chop spare ribs rump swine turducken ham hock pork loin ribeye. Strip steak tail pancetta meatball meatloaf picanha turkey bacon rump bresaola andouille jowl sirloin ham. Pastrami venison beef ribs salami kielbasa tongue swine, bresaola jerky ball tip. Venison pork loin beef landjaeger picanha tenderloin. Cupim spare ribs ham hock andouille kielbasa alcatra prosciutto burgdoggen bresaola.
          </p>

          <p>
            Jerky ground round cupim ham, shoulder swine sausage jowl. T-bone tri-tip prosciutto corned beef shoulder pork biltong drumstick meatloaf frankfurter shankle brisket ball tip spare ribs kevin. Bacon pancetta shankle biltong alcatra filet mignon. Hamburger salami chuck capicola sirloin strip steak.
          </p>

          <p>
            Sirloin porchetta burgdoggen frankfurter drumstick salami, tongue shank pork chicken spare ribs meatloaf kevin pork loin flank. Frankfurter pork belly brisket swine capicola, pastrami cupim bresaola. Ball tip meatball shank biltong andouille chicken. Pork chop ham hock beef porchetta biltong filet mignon tenderloin landjaeger andouille frankfurter. Boudin ball tip venison cupim, pork chop bacon strip steak filet mignon salami.
          </p>

          <p>
            Fatback rump pastrami pork swine shank shoulder corned beef shankle hamburger kielbasa porchetta chuck meatball flank. Rump hamburger shankle spare ribs porchetta brisket pancetta ribeye alcatra. Ham hock picanha drumstick, salami pastrami shankle strip steak. Short loin kevin shoulder jerky doner capicola hamburger fatback pork chop bresaola sausage. Drumstick t-bone biltong, fatback burgdoggen shankle prosciutto pastrami tri-tip alcatra bacon kielbasa.
          </p>
          <p>
            Bacon ipsum dolor amet meatloaf sausage tongue, pork loin cupim sirloin pork chop. Short ribs rump fatback porchetta pig strip steak beef sausage picanha pork loin. Frankfurter sirloin ball tip burgdoggen, leberkas prosciutto beef jowl t-bone short loin. Ground round meatball corned beef cupim, pancetta andouille tenderloin shankle porchetta short loin turducken shank beef ribs picanha burgdoggen. Kevin meatloaf hamburger bresaola pork.
          </p>

          <p>
            Jowl turducken rump tongue, boudin venison salami biltong spare ribs andouille pork chop turkey pork. Picanha cow ball tip pork chop spare ribs rump swine turducken ham hock pork loin ribeye. Strip steak tail pancetta meatball meatloaf picanha turkey bacon rump bresaola andouille jowl sirloin ham. Pastrami venison beef ribs salami kielbasa tongue swine, bresaola jerky ball tip. Venison pork loin beef landjaeger picanha tenderloin. Cupim spare ribs ham hock andouille kielbasa alcatra prosciutto burgdoggen bresaola.
          </p>

          <p>
            Jerky ground round cupim ham, shoulder swine sausage jowl. T-bone tri-tip prosciutto corned beef shoulder pork biltong drumstick meatloaf frankfurter shankle brisket ball tip spare ribs kevin. Bacon pancetta shankle biltong alcatra filet mignon. Hamburger salami chuck capicola sirloin strip steak.
          </p>

          <p>
            Sirloin porchetta burgdoggen frankfurter drumstick salami, tongue shank pork chicken spare ribs meatloaf kevin pork loin flank. Frankfurter pork belly brisket swine capicola, pastrami cupim bresaola. Ball tip meatball shank biltong andouille chicken. Pork chop ham hock beef porchetta biltong filet mignon tenderloin landjaeger andouille frankfurter. Boudin ball tip venison cupim, pork chop bacon strip steak filet mignon salami.
          </p>

          <p>
            Fatback rump pastrami pork swine shank shoulder corned beef shankle hamburger kielbasa porchetta chuck meatball flank. Rump hamburger shankle spare ribs porchetta brisket pancetta ribeye alcatra. Ham hock picanha drumstick, salami pastrami shankle strip steak. Short loin kevin shoulder jerky doner capicola hamburger fatback pork chop bresaola sausage. Drumstick t-bone biltong, fatback burgdoggen shankle prosciutto pastrami tri-tip alcatra bacon kielbasa.
          </p>
        </div>
      </div>
    );
  }
}

export default Dashboard