import {NewsPage,DiscographyPage,HomePage,SchedulePage,WorksPage,ContactPage,BiographyPage,EquipmentPage} from "./pages/index"
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/schedule" element={<SchedulePage/>}/>
          <Route path="/works" element={<WorksPage/>}/>
          <Route path="/discography" element={<DiscographyPage/>}/>
          <Route path="/biography" element={<BiographyPage/>}/>
          <Route path="/equipment" element={<EquipmentPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
