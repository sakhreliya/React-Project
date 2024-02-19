import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { CardData } from "./data/CardData";

function App() {
  return (
    <>
      <Navbar />

      {/* banner */}
      <section class="header" id="header">
        <div class="intro py-md-5 py-4">
          <div class="container py-md-5 py-4">
            <div class="row">
              <div class="col-md">
                <div class="divider-shape"></div>
                <h1 class="my-5">We are the best at Building brands!</h1>
                <a href="#" class="btn btn-lg btn-main">Get Started</a>
              </div>
              <div class="col-md"></div>
            </div>
          </div>

        </div>


        {/* Card */}
        <Card data = {CardData} />
      </section>

    </>
  );
}

export default App;
