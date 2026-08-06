import '../../styles/_colors.scss'
import '../../styles/reset.scss'

import Header from '../header/Header.tsx';
import Services from '../services/Services.tsx';
import ProblemSection from '../problemSection/ProblemSection.tsx';

import Technical from '../technical/Technical.tsx';
import Portfolio from '../portfolio/Portfolio.tsx';

const App = () => {
  return (
    <>
      <Header/>
      <Services/>
      <ProblemSection/>
      <Technical/>
      <Portfolio/>
    </>
  )
}

export default App