import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Home from "./views/home";

function App() {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Provider store={store}>
      <Layout className="app">
        <Content className="app-content">
          <Home />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
