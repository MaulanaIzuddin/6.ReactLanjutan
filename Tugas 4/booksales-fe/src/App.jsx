import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Books from "./pages/public/books"
import Register from "./pages/auth/register"
import Login from "./pages/auth/login"
import AdminLayout from "./layouts/admin"
import Dashboard from "./pages/admin"
import AdminBooks from "./pages/admin/books"
import BookCreate from "./pages/admin/books/create"
import BookEdit from "./pages/admin/books/edit"
import ShowBook from "./pages/public/books/show"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />} >
            <Route index element={<Home />} />
            <Route path="books">
              <Route index element={<Books/>}/>
              <Route path="show/:id" element={<ShowBook/>}/>
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="books"> 
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
              <Route path="edit/:id" element={<BookEdit/>} />
            </Route>


          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
