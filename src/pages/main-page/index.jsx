import NavBar from '../../components/common/nav-bar';
import ProductList from '../../components/common/product-list';
import Header from '../../components/layout/header';
import styles from "./styles.module.css";

function MainPage() {
  return (
    <div>
      <Header>
        <NavBar />
      </Header>
      <div className={styles.mainPage}>
      <ProductList />
      </div>
    </div>
  );
}

export default MainPage;
