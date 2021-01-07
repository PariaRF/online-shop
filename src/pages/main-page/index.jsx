import NavBar from '../../components/common/nav-bar';
import ProductList from '../../components/common/product-list';
import Header from '../../components/layout/header';

function MainPage() {
  return (
    <div className="main-page">
      <Header>
        <NavBar />
      </Header>
      <ProductList />
    </div>
  );
}

export default MainPage;
