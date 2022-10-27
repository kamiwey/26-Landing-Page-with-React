import React from "react";

//include images into your bundle

import  NavBar  from "./navbar.jsx";
import  JumboTron  from "./Jumbotron.jsx";
import  Cardinfo from "./card.jsx";
import  Foot from "./footer.jsx";
//create your first component

const Home = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<NavBar />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<JumboTron />
						</div>
					</div>

					<div className="row pb-5">
						<div className="col-xl-3 col-md-4 col-lg-3">

							<Cardinfo 
								imageUrl="https://picsum.photos/id/51/500/325"
								title="Card title"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu eu tortor pretium venenatis at nec mauris. Suspendisse ut bibendum odio. In sed suscipit neque."
								buttonLabel="Find out more!"
							/>
						</div>

						<div className="col-xl-3 col-md-4 col-lg-3">

							<Cardinfo 
								imageUrl="https://picsum.photos/id/33/500/325"
								title="Card title"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu eu tortor pretium venenatis at nec mauris. Suspendisse ut bibendum odio. In sed suscipit neque."
								buttonLabel="Find out more!"
							/>
						</div>

						<div className="col-xl-3 col-md-4 col-lg-3">

							<Cardinfo 
								imageUrl="https://picsum.photos/id/25/500/325"
								title="Card title"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu eu tortor pretium venenatis at nec mauris. Suspendisse ut bibendum odio. In sed suscipit neque."
								buttonLabel="Find out more!"
							/>
						</div>

						<div className="col-xl-3 col-md-4 col-lg-3">

							<Cardinfo 
								imageUrl="https://picsum.photos/id/14/500/325"
								title="Card title"
								description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu eu tortor pretium venenatis at nec mauris. Suspendisse ut bibendum odio. In sed suscipit neque."
								buttonLabel="Find out more!"
							/>
						</div>
					</div>
				</div>

				<Foot />

			</div>
		</>
	);
};

export default Home;
