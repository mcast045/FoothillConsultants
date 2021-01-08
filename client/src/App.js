import React, { useEffect } from 'react'
import './App.css'
import store from './Redux/Store'
import { loadUser } from './Redux/Actions/Auth'
import setAuthToken from './utils/setAuthToken'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blog/Blog'
import EditBlog from './Pages/Blog/EditBlog'
import Blog from './Pages/Blog/OneBlog'
import Auth from './Pages/Blog/Auth/Auth'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import { Switch, Route } from "react-router-dom"

function App() {

  if (localStorage.token)
    setAuthToken(localStorage.token)

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/blog" component={Blogs} />
        <Route path="/edit" component={EditBlog} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
