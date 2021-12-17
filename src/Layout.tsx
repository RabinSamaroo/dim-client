import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

export default function Layout(props: any) {
  return (
    <>
      <div className="min-h-full">
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
}
