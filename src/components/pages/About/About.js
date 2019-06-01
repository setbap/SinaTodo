import React from "react";

const About = () => {
	return (
		<div>
			<div
				className="rounded-circle mx-auto my-3 shadow-lg border  text-white  text-center display-4 bg-yellow "
				style={{
					width: "75px",
					height: "75px",
				}}
			>
				SE
			</div>
			<div
				className="rounded shadow-sm  mx-auto text-center  bg-yellow "
				style={{
					width: "90%",
					marginTop: "-50px",
				}}
			>
				<br />
				<p className="text-center text-white pt-2">@setbap</p>

				<p className="  text-white px-3  text-justify ">
					this page was created by sina ebrahimi by react and
					reactstrap. using react 16.8 and react hook. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Alias incidunt,
					quibusdam consequatur natus perferendis saepe rerum eligendi
					est voluptatibus ea, neque debitis iste. Atque, soluta ad
					earum molestiae explicabo ratione adipisci consequatur
					tempore quos, illo minus, tenetur optio architecto corrupti
					fugiat doloribus.
				</p>
				<p className="text-center pb-3  text-white">
					made with{" "}
					<span className="text-danger  shadow-lg text-white d-inline">
						{"<"}3{" "}
					</span>{" "}
					for <span className="text-danger d-inline">you</span>
				</p>
			</div>
		</div>
	);
};

export default About;
