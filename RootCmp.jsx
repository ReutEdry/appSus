const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { MailDetail } from "./apps/mail/views/MailDetails.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<MailDetail />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/:mailTitle/:mailBody" element={<NoteIndex />} />
                <Route path="/note/:noteInfo" element={<MailIndex />} />
            </Routes>
        </section>
    </Router>
}
