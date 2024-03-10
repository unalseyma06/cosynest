import NavbarStyle from "../scss/navbar.module.scss";


 function Navbar() {
  return (
    <div className={NavbarStyle.navbar}>
      <a href="#">Ana Sayfa</a>
      <a href="#">Ürünler</a>
      <a href="#">Sepetim</a>
      
        
    </div>
  )
}

export default Navbar