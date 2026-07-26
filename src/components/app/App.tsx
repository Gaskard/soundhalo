import '../../styles/_colors.scss'

import Header from '../header/Header.tsx';
import Services from '../services/Services.tsx';
import ProblemSection from '../problemSection/ProblemSection.tsx';

import '../../styles/reset.scss'

const App = () => {
  return (
    <>
      <Header/>
      <Services/>
      <ProblemSection/>
    </>
  )
}

export default App