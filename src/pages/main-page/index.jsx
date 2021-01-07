import NavBar from '../../components/common/nav-bar';
import NavBarItem from '../../components/common/nav-bar-item';
import Header from '../../components/layout/header';

function MainPage() {
  return (
    <div className="main-page">
      <Header>
        <NavBar />
      </Header>
    </div>
  );
}

export default MainPage;
